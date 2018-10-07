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

$GAPROOT/bin/gap.sh makedoc.g 
