#!/usr/bin/env bash

set -ex

CURRENT=`pwd`

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

cd pkg

# install latest version of io
git clone https://github.com/gap-packages/io
cd io
./autogen.sh
./configure
make -j4 V=1
cd ..

# install latest version of json
git clone https://github.com/gap-packages/json
cd json
./autogen.sh
./configure
make -j4 V=1
cd ..

# install latest version of profiling
git clone https://github.com/gap-packages/profiling
cd profiling
./autogen.sh
./configure
make -j4 V=1

cd $CURRENT

################################################################################
#
# Install francy on GAP
#
mv gap $GAPROOT/pkg/francy

################################################################################
#
# Install francy-js and extensions build tools
#
cd js
npm install

cd extensions/jupyter_francy
npm install

cd $CURRENT