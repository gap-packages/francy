#!/usr/bin/env bash
set -ex

CURRENT=`pwd`

# Test GAP
GAP="$GAPROOT/bin/gap.sh --quitonbreak -q"

mkdir $COVDIR
$GAP --cover $COVDIR/test.coverage $GAPROOT/pkg/francy/tst/testall.g

# Test Javascript
cd js

npm run lint
npm run coverage
npm run docs

# Test Extensions - won't produce any coverage obviously
cd packages/francy-extension-jupyter

pyenv local 3.6

# install jupyter
pip3.6 install jupyter
#pip3.6 install jupyterlab

# install extension on pip
pip3.6 install -e .

# install extension link on jupyter notebook
`pyenv which jupyter` nbextension install --symlink --py --sys-prefix jupyter_francy
`pyenv which jupyter` nbextension enable --py --sys-prefix jupyter_francy
`pyenv which jupyter` nbextension list 2>&1 | grep -q jupyter_francy

# TODO FIXME - labextension does not work!
# install extension link on jupyter lab
#`pyenv which jupyter` labextension link
#`pyenv which jupyter` labextension list 2>&1 | grep -q jupyter_francy

cd $CURRENT

cd gap

cat makedoc.g | $GAP

cd $CURRENT/gap
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

$GAPROOT/bin/gap.sh update.g

git add PackageInfo.g README* doc/ _data/package.yml
git commit -m "Setup gh-pages based on GitHubPagesForGAP"
git push -f --set-upstream origin gh-pages
