#!/usr/bin/env bash
set -ex

CURRENT=`pwd`

# Release Jupyter Extension to PyPi

echo "Release to PyPi..."

cd $CURRENT/js/packages/francy-extension-jupyter

pyenv local 3.6

pip3.6 install wheel
pip3.6 install twine

python3.6 setup.py sdist
python3.6 setup.py bdist_wheel --universal

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

echo "creating release artifact : $filename"

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

echo "uploading asset to: $upload_url"

curl -s -H "Authorization: token $GITHUB_ADMIN_KEY" -H "Content-Type: application/tar+gzip" \
  --data-binary @$filename "$upload_url?name=$filename&label=$filename"

echo "Done"