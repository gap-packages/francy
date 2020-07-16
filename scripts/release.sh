#!/usr/bin/env bash
set -ex

CURRENT=`pwd`

# JS documentation

cd $CURRENT/js

npm run docs

# GAP documentation

cd $CURRENT

GAP="$GAPROOT/bin/gap.sh --quitonbreak -q"

cat makedoc.g | $GAP

# Release documentation

# configure git
git config credential.helper "store --file=$CURRENT/.git-credentials"
echo "https://${GITHUB_ADMIN_KEY}:@github.com" > $CURRENT/.git-credentials

# Add a new remote pointing to the GitHubPagesForGAP repository
git remote add gh-gap https://github.com/gap-system/GitHubPagesForGAP
git fetch gh-gap

# Create a fresh gh-pages branch from the new remote
git branch gh-pages gh-gap/gh-pages --no-track

# Create a new worktree and change into it
git worktree add gh-pages gh-pages
cd gh-pages

cp -f ../PackageInfo.g ../README* .
cp -f ../doc/*.{css,html,js,txt} doc/
mkdir -p doc/js && cp -rf ../js/doc doc/js

$GAP update.g

git add PackageInfo.g README* doc/ _data/package.yml
git commit -m "Setup gh-pages based on GitHubPagesForGAP"
git push -f --set-upstream origin gh-pages

# Release Jupyter Extension to PyPi

echo "Release to PyPi..."

cd $CURRENT/js/packages/francy-extension-jupyter

pip3 install wheel
pip3 install twine

python3 setup.py sdist
python3 setup.py bdist_wheel --universal

`pyenv which twine` upload dist/*

echo "Done"

# Release GAP Package to Github

echo "Release to Github..."

cd $CURRENT

release="release-$TRAVIS_BRANCH"
json="{\"tag_name\": \"$TRAVIS_BRANCH\", \"name\": \"$release\", \"body\": \"Francy Release $TRAVIS_BRANCH\"}"

upload_url=$(curl -s -H "Authorization: token $GITHUB_ADMIN_KEY" -d "$json" "https://api.github.com/repos/gap-packages/francy/releases" | jq -r '.upload_url')

upload_url="${upload_url%\{*}"
version=${TRAVIS_BRANCH:1}
folder="francy-$version"
filename="$folder.tar.gz"

echo "Creating release artifact : $filename"

mkdir -p $folder

cd $folder
cp -Rfp ../doc .
cp -Rfp ../examples .
cp -Rfp ../gap/ .
cp -Rfp ../tst/ .
cp -Rfp ../init.g .
cp -Rfp ../LICENSE .
cp -Rfp ../makedoc.g .
cp -Rfp ../PackageInfo.g .
cp -Rfp ../read.g .
cp -Rfp ../README.md .
cd ..

tar -czf $filename $folder

echo "Uploading asset to: $upload_url"

curl -s -H "Authorization: token $GITHUB_ADMIN_KEY" -H "Content-Type: application/tar+gzip" \
  --data-binary @$filename "$upload_url?name=$filename&label=$filename"

echo "Done"

# Release to npm

echo "Release to NPM..."

# config npm token for authentication
npm config set '//registry.npmjs.org/:_authToken' ${NPM_TOKEN}

echo "NPM configured for user: $(npm whoami)"

cd $CURRENT/js/packages/francy-core
npm publish

cd $CURRENT/js/packages/francy
npm publish

cd $CURRENT/js/packages/francy-extension-browser
npm publish

cd $CURRENT/js/packages/francy-extension-jupyter/jupyter_francy/labextension/
npm publish

cd $CURRENT/js/packages/francy-renderer-d3
npm publish

cd $CURRENT/js/packages/francy-renderer-graphviz
npm publish

cd $CURRENT/js/packages/francy-renderer-vis
npm publish

echo "Done"
