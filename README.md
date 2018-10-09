[![Build Status](https://travis-ci.org/gap-packages/francy.svg?branch=master)](https://travis-ci.org/gap-packages/francy)
[![Test Coverage Status](https://codecov.io/gh/gap-packages/francy/branch/master/graph/badge.svg)](https://codecov.io/gh/gap-packages/francy)
[![PyPI version](https://badge.fury.io/py/jupyter-francy.svg)](https://badge.fury.io/py/jupyter-francy)

# Francy

Francy is a package for GAP and provides a framework for Interactive Discrete Mathematics.

Unlike [XGAP](https://github.com/gap-packages/xgap), Francy is not linked with any GUI framework and instead, 
this package is responsible for the generation of a semantic model that can be used to produce a graphical representation using any other framework / language.

See [Graphics Semantics Package for GAP](/gap)

There is javascript implementation of the graphical representation that works on Jupyter, embeded in a Web page or as a Desktop Application (e.g. using electron).

See [Graphics Interface](/js)

## Binder 

[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/gap-packages/francy/master)
[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/gap-packages/francy/master?urlpath=lab)

The binder includes all packages from `bootstrap-pkg-full`, plus:

[Francy Monoids](https://github.com/gap-packages/FrancyMonoids)

[Francy Subgroup Lattice](https://github.com/mcmartins/subgroup-lattice)

[Jupyter GAP Kernel](https://github.com/gap-packages/JupyterKernel)

# Jupyter Integration

In order to use this module in Jupyter, install it as follows, both jupyter lab and notebook extension:

```bash
mcmartins@local:~$ pip install jupyter_francy
mcmartins@local:~$ jupyter lab build # for JupyterLab
mcmartins@local:~$ jupyter nbextension enable --py --sys-prefix jupyter_francy # for Notebook
mcmartins@local:~$ wget -qO- https://github.com/gap-packages/francy/archive/v0.14.0.tar.gz | tar xzf - francy-0.14.0/gap/ --strip=1 --transform 's/gap/francy/' -C /path-to-gap/pkg
```

The jupyter extension requires the GAP Kernel and Francy GAP packages installed.

See [Jupyter GAP Kernel](https://github.com/gap-packages/JupyterKernel)

See [Graphics Semantics Package for GAP](/gap)

See [Javascript Renderers](/js)

# Package Structure

|Directory   |Description                                                                   |
|:-----------|:-----------------------------------------------------------------------------|
| scripts    | contains scripts used by travis to set-up the environment and release process|
| notebooks  | contains some notebooks with francy examples                                 |
| js         | contains the source code of francy-js                                        |
| gap        | contains the source code of francy-gap                                       |
| extensions | contains the extensions built for Jupyter Notebook and Lab                   |

# License

[MIT](LICENSE) License
