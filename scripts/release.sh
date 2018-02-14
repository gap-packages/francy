#!/usr/bin/env bash
set -ex

CURRENT=`pwd`

tar -czf gap-$TRAVIS_TAG.tgz gap/
