#!/usr/bin/env bash

set -e

ls -lrt

################################################################################
#
# Install GAP
#
echo -e "\nInstalling latest master GAP into $GAPROOT..."

git clone --depth=2 https://github.com/gap-system/gap.git $GAPROOT

cd $GAPROOT

if [ -f autogen.sh ]; then
  ./autogen.sh
fi

./configure
make -j4

make bootstrap-pkg-minimal

ls -lrt

# install latest version of json
if [ -d $GAPROOT/pkg/json ]; then
  git clone https://github.com/gap-packages/json $GAPROOT/pkg/json
fi

cd $GAPROOT/pkg/json
./autogen.sh
./configure $CONFIGFLAGS
make -j4 V=1
cd -

################################################################################
#
# Install francy on GAP
#
cd ..
mv gap $GAPROOT/pkg/francy

################################################################################
#
# Install francy-js build tools
#
cd js
npm install
cd -

################################################################################
#
# Install codeclimate agent
#
curl -L https://codeclimate.com/downloads/test-reporter/test-reporter-latest-linux-amd64 > ./cc-test-reporter
chmod +x ./cc-test-reporter
./cc-test-reporter before-build
