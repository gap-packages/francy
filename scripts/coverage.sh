#!/usr/bin/env bash
set -ex

CURRENT=`pwd`

GAP="$GAPROOT/bin/gap.sh --quitonbreak -q"

# generate library coverage reports
$GAP -a 500M -m 500M -q <<GAPInput
if LoadPackage("profiling") <> true then
    Print("ERROR: could not load profiling package");
    FORCE_QUIT_GAP(1);
fi;
d := Directory("$COVDIR");;
covs := [];;
for f in DirectoryContents(d) do
    if f in [".", ".."] then continue; fi;
    Add(covs, Filename(d, f));
od;
Print("Merging coverage results\n");
r := MergeLineByLineProfiles(covs);;
Print("Outputting JSON\n");
OutputJsonCoverage(r, "gap-coverage.json");;
QUIT_GAP(0);
GAPInput

# FIXME
# generate source coverage reports by running gcov
#gcov -o . $COVDIR/*.c*

cd js

################################################################################
#
# Install codeclimate agent
#
curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter
chmod +x ./cc-test-reporter
./cc-test-reporter before-build
./cc-test-reporter after-build

cd $CURRENT
bash <(curl -s https://codecov.io/bash)
