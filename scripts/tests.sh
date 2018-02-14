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
npm run webpack:all

# Test Extensions - won't produce any coverage obviously
cd extensions/jupyter_francy

pip install -e .
jupyter nbextension install --symlink --py --sys-prefix jupyter_francy
jupyter nbextension enable --py --sys-prefix jupyter_francy
jupyter nbextension list 2>&1 | grep -q jupyter_francy

pip install jupyterlab
jupyter labextension link
jupyter labextension list 2>&1 | grep -q jupyter_francy

cd $CURRENT
