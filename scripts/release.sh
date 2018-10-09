#!/usr/bin/env bash
set -ex

CURRENT=`pwd`

# Release Jupyter Extension to PyPi

cd $CURRENT/js/packages/francy-extension-jupyter

pyenv local 3.6

pip3.6 install wheel
pip3.6 install twine

python3.6 setup.py sdist
python3.6 setup.py bdist_wheel --universal

`pyenv which twine` upload dist/*
