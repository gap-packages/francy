![Build Workflow](https://github.com/gap-packages/francy/actions/workflows/CI.yml/badge.svg)
[![Test Coverage Status](https://codecov.io/gh/gap-packages/francy/branch/master/graph/badge.svg)](https://codecov.io/gh/gap-packages/francy)

[![Jupyter Notebook extension](https://badge.fury.io/py/jupyter-francy.svg)](https://badge.fury.io/py/jupyter-francy)
[![Jupyter Lab version](https://badge.fury.io/py/jupyterlab-francy.svg)](https://badge.fury.io/py/jupyterlab-francy)

# Francy

Francy is a framework for Interactive Discrete Mathematics built for [GAP](https://www.gap-system.org/) - 
Groups, Algorithms, Programming - a System for Computational Discrete Algebra.

Unlike [XGAP](https://github.com/gap-packages/xgap), Francy is not linked with any GUI framework and instead, 
this package generates a semantic model of data structures that can be used to produce a graphical representation
of these, using any other framework / language.

See [Official Documentation](https://gap-packages.github.io/francy/doc/chap1.html)

We provide a Javascript module able to produce graphical representations of the semantic model,
that works on Jupyter environments, embedded in a Web page or as a Desktop Application (e.g. using electron).

See [Graphics Interface](/js)

## Binder

Jupyter Lab Binder

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/gap-packages/francy/master?urlpath=lab)

The following notebooks are available:

| Notebook                        | Description                                                   |
|:--------------------------------|:--------------------------------------------------------------|
| demo.ipynb                      | Contains examples of all features present in Francy           |
| francy.ipynb                    | First notebook ever created with Francy                       |
| francy-features.ipynb           | Contains examples of all features present in Francy           |
| francy-monoids.ipynb            | Contains FrancyMonoids package examples                       |
| francy-monoids-mult-three.ipynb | Contains an example of proofs used in a paper                 |
| francy-numericalsgps.ipynb      | Same as above, but the algorithms are visible in the notebook |
| ICMS_2018.ipynb                 | Presentation notebook for the ICMS 2018 in USA                |
| messages.ipynb                  | Contains examples of how to use messages                      |
| orbital-graphs.ipynb            | Contains some research algorithms for orbital graphs          |
| output-widget.ipynb             | Contains an example of the output of 'plain/text' elements    |
| subgroup-lattice.ipynb          | Contains Subgroup-Lattice package examples                    |

# Jupyter Integration

In order to use this module in JupyterLab and Notebook >=7.0.0, install it as follows:

```bash
mcmartins@local:~$ pip install -U jupyterlab-francy
```

If you still use the old Jupyter Notebook (<7.0.0), you should use the old extension v1.2.4:

```bash
mcmartins@local:~$ pip install -U jupyter-francy
```

Please note that in order to use `Francy`, it is required that the `JupyterKernel` GAP package is installed. 
See [Jupyter GAP Kernel](https://github.com/gap-packages/JupyterKernel) for more information.

# Package Structure

|Directory   |Description                                                     |
|:-----------|:---------------------------------------------------------------|
| tst        | contains gap code tests                                        |
| schema     | contains the francy JSON Schema                                |
| notebooks  | contains some notebooks with francy examples                   |
| js         | contains the source code of francy-js                          |
| gap        | contains the source code of francy-gap                         |
| examples   | contains examples used throughout francy-gap documentation     |
| doc        | contains introductory documentation for francy-gap             |

# Other projects based or inspired by Francy

| Project                                                    | Author                                           | Description                                              |
|:-----------------------------------------------------------|:-------------------------------------------------|:---------------------------------------------------------|
| [Jupyterviz](https://github.com/nathancarter/jupyterviz)   | [Nathan Carter](https://github.com/nathancarter) | Provides general purpose visualization tools             |                            
| [Francy Julia](https://github.com/fieker/Francy)           | [Claus Fieker](https://github.com/fieker)        | Francy ported to Julia language                          |
| [Francy Widgets](https://github.com/zerline/francy-widget) | [Odile Bénassy](https://github.com/zerline)      | Francy Python adapter for representing graphs in Jupyter |

## Releasing

All developments should happen on the branch `develop` and this should be merged into `master` when one is happy to release.

To release, the official [ReleaseTools](https://github.com/gap-system/ReleaseTools) procedure should be followed.

### Versioning

To update the JS packages version, run the following command and pick the new version:

```bash
user@local js/ $ yarn run version
```

To update the Python3 package version, please change it on the `pyproject.toml`:

* `js/packages/francy-extension-jupyterlab/pypproject.toml`

### CI / CD Pipelines

There are 2 workflows defined for this project:

* CI - This workflow runs all tests (JS and GAP) for every commit/pull request on branches `develop` and `master`
* RELEASE - This workflow runs the Python PyPi.org and NPM releases on new `tag`s created, normally after running the 
* [ReleaseTools](https://github.com/gap-system/ReleaseTools) procedure.

# License

[MIT](LICENSE) License
