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

# Test Extensions - won't produce any coverage obviously
cd packages/francy-extension-jupyter

# switch to python3.8
pyenv local 3.8

echo "PATH for pyenv `pyenv root`"
echo "PATH for pip `which pip`"
echo "PATH for pip `which pip3`"

# upgrade pip
pip3 install --upgrade pip

# install jupyter
pip3 install jupyter
pip3 install jupyterlab

# install extension on pip
pip3 install -e .

# make sure pyenv is correctly in path
export PATH=$PATH:/opt/pyenv/versions/3.6/bin/

# install extension link on jupyter notebook
jupyter nbextension install --symlink --py --sys-prefix jupyter_francy
jupyter nbextension enable --py --sys-prefix jupyter_francy
jupyter nbextension list 2>&1 | grep -q jupyter_francy

# install extension link on jupyter lab
cd jupyter_francy/labextension
jupyter labextension link --debug
jupyter labextension list 2>&1 | grep -q jupyter_francy
