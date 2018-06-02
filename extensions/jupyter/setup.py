#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Manuel Martins.
# Distributed under the terms of the Modified BSD License.

from __future__ import print_function

# the name of the project
name = 'jupyter_francy'
node_modules = 'node_modules'

#-----------------------------------------------------------------------------
# Minimal Python version sanity check
#-----------------------------------------------------------------------------

import sys

v = sys.version_info
if v[:2] < (3, 3):
    # Note: 3.3 is untested, but we'll still allow it
    error = 'ERROR: %s requires Python version 3.3 or above.' % name
    print(error, file=sys.stderr)
    sys.exit(1)

#-----------------------------------------------------------------------------
# get on with it
#-----------------------------------------------------------------------------

import io
import os
from os.path import join as pjoin
from glob import glob

from setuptools import setup, find_packages

from setupbase import (create_cmdclass, install_npm, ensure_targets,
    combine_commands, expand_data_files, gap_installation)
    
from pkg_resources import resource_filename

here = os.path.abspath(os.path.dirname(__file__))
nbextension = pjoin(here, name, 'nbextension')
labextension = pjoin(here, name, 'labextension')
gapextension = pjoin(here, node_modules, 'francy-gap')

# Representative files that should exist after a successful build
jstargets = [
    pjoin(nbextension, 'extension.js'),
    pjoin(here, 'lib', 'lab_extension.js'),
]

version_ns = {}
with io.open(pjoin(here, name, '_version.py'), encoding='utf8') as f:
    exec(f.read(), {}, version_ns)

cmdclass = create_cmdclass(('jsdeps', 'gap_package'))
cmdclass['jsdeps'] = combine_commands(
    install_npm(here, build_cmd='build:all'),
    ensure_targets(jstargets),
)
cmdclass['gap_package'] = gap_installation(
    resource_filename(node_modules, 'francy-gap')
)

package_data = {
    name: [
        'nbextension/*.*js*',
        'labextension/*.tgz',
    ],
    node_modules: [
        'francy-gap/*'
    ]
}

data_files = expand_data_files([
    ('share/jupyter/nbextensions/jupyter_francy', [pjoin(nbextension, '*.js*')]),
    ('share/jupyter/lab/extensions', [pjoin(labextension, '*.tgz')])
])

setup_args = dict(
    name                 = name,
    version              = version_ns['__version__'],
    scripts              = glob(pjoin('scripts', '*')),
    cmdclass             = cmdclass,
    packages             = find_packages(here),
    package_data         = package_data,
    include_package_data = True,
    data_files           = data_files,
    long_description     = 'Jupyter Notebook and Jupyter Lab plugin for Francy - An Interactive Discrete Mathematics Framework for GAP.',
    author               = 'Manuel Martins',
    author_email         = 'manuelmachadomartins@gmail.com',
    url                  = 'http://jupyter.org',
    license              = 'BSD',
    platforms            = 'Linux, Mac OS X, Windows',
    keywords             = ['ipython', 'jupyter', 'francy', 'gap'],
    classifiers          = [
        'Intended Audience :: End-Users',
        'Intended Audience :: Developers',
        'Intended Audience :: System Administrators',
        'Intended Audience :: Science/Research',
        'License :: OSI Approved :: BSD License',
        'Programming Language :: Python',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.3',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
    ],
    install_requires     = [
        'notebook>=4.3.0'
    ]
)

if __name__ == '__main__':
    setup(**setup_args)
