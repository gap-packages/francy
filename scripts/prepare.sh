#!/usr/bin/env bash

set -ex

CURRENT=`pwd`

cd $GAPROOT/pkg

rm -rf uuid-* crypting-* JupyterKernel FrancyMonoids

# install latest version of uuid
git clone https://github.com/gap-packages/uuid

# install latest version of crypting
git clone https://github.com/gap-packages/crypting

# install latest version of JupyterKernel
git clone https://github.com/gap-packages/JupyterKernel

# install latest version of francy-monoid
git clone https://github.com/gap-packages/FrancyMonoids

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
cp -r gap $GAPROOT/pkg/francy

################################################################################
#
# Install francy-js and extensions build tools
#
cd js
npm install
npm run build

cd $CURRENT

cd extensions/jupyter
npm install
npm run build:all

cd $CURRENT
