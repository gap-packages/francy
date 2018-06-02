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

make bootstrap-pkg-full WGET="wget -N --no-check-certificate --tries=5 --waitretry=5 --retry-connrefused"

cd pkg

rm -rf uuid-* crypting-*

# install latest version of uuid
git clone https://github.com/gap-packages/uuid

# install latest version of crypting
git clone https://github.com/gap-packages/crypting

# install latest version of JupyterKernel
git clone https://github.com/gap-packages/JupyterKernel

# build some packages; default is to build 'io' and 'profiling', in order to
# generate coverage results. If you need to build additional packages (or for
# some reason need to build a custom version of io or profiling), please set
# the GAP_PKGS_TO_BUILD environment variable (e.g. in your .travis.yml), or
# directly call BuildPackages.sh from .travis.yml. For an example of the
# former, take a look at the cvec package.
for pkg in ${GAP_PKGS_TO_BUILD-io profiling ZeroMQInterface json crypting}; do
    ../bin/BuildPackages.sh --strict $pkg*
done

cd $CURRENT

################################################################################
#
# Install francy on GAP
#
ln -s gap $GAPROOT/pkg/francy

################################################################################
#
# Install francy-js and extensions build tools
#
cd js
ls -lart . ../ ../../
npm install
npm run build:all

cd $CURRENT

cd gap
npm install
npm run build:all

cd $CURRENT
cd extensions/jupyter
npm install

cd $CURRENT
