# Making a jupyter_francy release

This document guides an extension maintainer through creating and publishing a release of jupyter_francy. This process creates a Python source package and a Python universal wheel and uploads them to PyPI.

## Git Flow

Follow the git flow:

```bash
mcmartins@local:~$ git checkout develop # just to make sure
mcmartins@local:~$ git flow init # all defaults except the tag prefix that should be 'v'
mcmartins@local:~$ git flow release start 0.10.0
mcmartins@local:~$ cd js && npm run version # update the release version
mcmartins@local:~$ git add . && git commit -m "verion bump for release" && git push
mcmartins@local:~$ git checkout master
mcmartins@local:~$ git merge release/0.10.0
mcmartins@local:~$ git flow release finish '0.10.0'
mcmartins@local:~$ git push
mcmartins@local:~$ git push --tags
```

## Remove generated files

Remove old Javascript bundle and Python package builds:

```bash
git clean -xfd
```

## Build the package

Build the Javascript extension bundle, then build the Python package and wheel:

```bash
python setup.py sdist
python setup.py bdist_wheel --universal
```

## Upload the package

Upload the Python package and wheel with [twine](https://github.com/pypa/twine). See the Python documentation on [package uploading](https://packaging.python.org/distributing/#uploading-your-project-to-pypi)
for [twine](https://github.com/pypa/twine) setup instructions and for why twine is the recommended uploading method.

```bash
twine upload dist/*
```
