#!/usr/bin/env bash
set -ex

CURRENT=`pwd`

GAP="$GAPROOT/bin/gap.sh --quitonbreak -q"

mkdir $COVDIR
$GAP --cover $COVDIR/test.coverage $GAPROOT/pkg/francy/tst/testall.g

cd js

npm run lint
npm run coverage

cd $CURRENT
