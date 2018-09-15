#!/usr/bin/env python
# coding: utf-8

# Copyright (c) Manuel Martins.
# Distributed under the terms of the Modified BSD License.

import json

with open("package.json", "r") as read_file:
    package = json.load(read_file)

#version_info = (0, 9, 1, 'alpha')
#__version__ = ".".join(map(str, version_info))
__version__ = package['version']
