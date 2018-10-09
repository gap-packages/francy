#!/usr/bin/env bash
set -ex

CURRENT=`pwd`

# Release documentation

cd $CURRENT/gap

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
mkdir -p doc/js && cp -rf ../../js/doc doc/js

$GAP update.g

git add PackageInfo.g README* doc/ _data/package.yml
git commit -m "Setup gh-pages based on GitHubPagesForGAP"
git push -f --set-upstream origin gh-pages

# Release Jupyter Extension to PyPi

cd $CURRENT/js/packages/francy-extension-jupyter

pyenv local 3.6

pip3.6 install wheel
pip3.6 install twine

python3.6 setup.py sdist
python3.6 setup.py bdist_wheel --universal

`pyenv which twine` upload dist/*
