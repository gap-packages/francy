# -*- coding: utf-8 -*-

from __future__ import print_function
from setuptools import setup, find_packages, Command
from setuptools.command.sdist import sdist
from setuptools.command.build_py import build_py
from setuptools.command.egg_info import egg_info
from subprocess import check_call
from glob import glob
from os.path import join as pjoin
import os
import sys
import platform

from setupbase import ensure_python, ensure_targets

# The name of the project
name = 'jupyter_francy'

# Ensure a valid python version
ensure_python('>=3.4')

here = os.path.dirname(os.path.abspath(__file__))
node_root = here
is_repo = os.path.exists(os.path.join(here, '.git'))
nb_path = pjoin(here, name, 'nbextension')
lab_path = pjoin(here, name, 'labextension')

npm_path = os.pathsep.join([
    pjoin(node_root, 'node_modules', '.bin'),
                os.environ.get('PATH', os.defpath),
])

from distutils import log
log.set_verbosity(log.DEBUG)
log.info('setup.py entered')
log.info('$PATH=%s' % os.environ['PATH'])

LONG_DESCRIPTION = 'Jupyter Notebook and Jupyter Lab plugin for Francy - An Interactive Discrete Mathematics Framework for GAP.'

def js_prerelease(command, strict=False):
    """decorator for building minified js/css prior to another command"""
    class DecoratedCommand(command):
        def run(self):
            jsdeps = self.distribution.get_command_obj('jsdeps')
            if not is_repo and all(os.path.exists(t) for t in jsdeps.targets):
                # sdist, nothing to do
                command.run(self)
                return

            try:
                self.distribution.run_command('jsdeps')
            except Exception as e:
                missing = [t for t in jsdeps.targets if not os.path.exists(t)]
                if strict or missing:
                    log.warn('rebuilding js and css failed')
                    if missing:
                        log.error('missing files: %s' % missing)
                    raise e
                else:
                    log.warn('rebuilding js and css failed (not a problem)')
                    log.warn(str(e))
            command.run(self)
            update_package_data(self.distribution)
    return DecoratedCommand

def update_package_data(distribution):
    """update package_data to catch changes during setup"""
    build_py = distribution.get_command_obj('build_py')
    # distribution.package_data = find_package_data()
    # re-init build_py options which load package_data
    build_py.finalize_options()


class NPM(Command):
    description = 'install package.json dependencies using npm'

    user_options = []

    node_modules = pjoin(node_root, 'node_modules')

    targets = [
        #pjoin(here, name, 'nbextension', 'extension.js'),
        pjoin(here, name, 'nbextension', 'index.js')
    ]

    def initialize_options(self):
        pass

    def finalize_options(self):
        pass

    def has_npm(self):
        try:
            check_call(['npm', '--version'])
            return True
        except:
            return False

    def should_run_npm_install(self):
        package_json = pjoin(node_root, 'package.json')
        node_modules_exists = os.path.exists(self.node_modules)
        return self.has_npm()

    def run(self):
        has_npm = self.has_npm()
        if not has_npm:
            log.error("`npm` unavailable.  If you're running this command using sudo, make sure `npm` is available to sudo")

        env = os.environ.copy()
        env['PATH'] = npm_path

        if self.should_run_npm_install():
            log.info("Installing build dependencies with npm.  This may take a while...")
            check_call(['npm', 'install'], cwd=node_root, stdout=sys.stdout, stderr=sys.stderr)
            os.utime(self.node_modules, None)

        for t in self.targets:
            if not os.path.exists(t):
                msg = 'Missing file: %s' % t
                if not has_npm:
                    msg += '\nnpm is required to build a development version of widgetsnbextension'
                raise ValueError(msg)

        # update package data in case this created new files
        update_package_data(self.distribution)

version_ns = {}
with open(pjoin(here, name, '_version.py')) as f:
    exec(f.read(), {}, version_ns)

setup_args = {
    'name': name,
    'version': version_ns['__version__'],
    'description': 'Jupyter Notebook and Jupyter Lab plugin for Francy',
    'long_description': LONG_DESCRIPTION,
    'license': 'MIT License',
    'include_package_data': True,
    'data_files': [
        ('share/jupyter/nbextensions/jupyter_francy', [nb_path + '*.js*']),
        ('share/jupyter/lab/extensions', [lab_path + '*.tgz']),
        ('etc/jupyter/nbconfig/notebook.d' , ['jupyter_francy.json'])
    ],
    'install_requires': [
        'notebook>=4.3.0',
        ],
    'packages': find_packages(),
    'zip_safe': False,
    'cmdclass': {
        'build_py': js_prerelease(build_py),
        'egg_info': js_prerelease(egg_info),
        'sdist': js_prerelease(sdist, strict=True),
        'jsdeps': NPM,
    },
    'author': 'Manuel Martins',
    'author_email': 'manuelmachadomartins@gmail.com',
    'url': 'https://github.com/gap-packages/francy',
    'keywords': ['Jupyter', 'Widgets', 'IPython', 'GAP'],
    'classifiers': [
        'Development Status :: 4 - Beta',
        'Intended Audience :: Developers',
        'Intended Audience :: Science/Research',
        'Topic :: Multimedia :: Graphics',
        'License :: OSI Approved :: MIT License',
        'Programming Language :: Python :: 3.4',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
    ],
}

setup(**setup_args)
