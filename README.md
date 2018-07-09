# Francy

Francy is a package for GAP and provides a framework for Interactive Discrete Mathematics.

Unlike [XGAP](https://github.com/gap-packages/xgap), Francy is not linked with any GUI framework and instead, 
this package is responsible for the generation of a semantic model that can be used to produce a graphical representation using any other framework / language.

See [Graphics Semantics Package for GAP](/gap)

There is javascript implementation of the graphical representation that works on Jupyter, embeded in a Web page or as a Desktop Application (e.g. using electron).

See [Graphics Interface using Javascritp and D3.v4](/js)

## Binder 

The binder includes all packages from `bootstrap-pkg-full`, plus:

[Francy-Monoids](https://github.com/gap-packages/FrancyMonoids)

[Jupyter GAP Kernel](https://github.com/gap-packages/JupyterKernel)

## Master

[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/mcmartins/francy/master)
[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/mcmartins/francy/master?urlpath=lab)
[![Build Status](https://travis-ci.org/mcmartins/francy.svg?branch=master)](https://travis-ci.org/mcmartins/francy)

## Develop

[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/mcmartins/francy/develop)
[![Binder](https://mybinder.org/badge.svg)](https://mybinder.org/v2/gh/mcmartins/francy/develop?urlpath=lab)
[![Build Status](https://travis-ci.org/mcmartins/francy.svg?branch=develop)](https://travis-ci.org/mcmartins/francy)
[![Test Coverage Status](https://codecov.io/gh/mcmartins/francy/branch/develop/graph/badge.svg)](https://codecov.io/gh/mcmartins/francy)
[![JS Maintainability](https://api.codeclimate.com/v1/badges/db52d89d90ab0d7e6fd4/maintainability)](https://codeclimate.com/github/mcmartins/francy/maintainability)

# Jupyter Integration

[![PyPI version](https://badge.fury.io/py/jupyter-francy.svg)](https://badge.fury.io/py/jupyter-francy)

In order to use this module in Jupyter, install it as follows, both jupyter lab and notebook extension:

```bash
mcmartins@local:~$ pip install jupyter_francy
```

The jupyter extension requires the GAP Kernel and Francy GAP packages installed.

See [Jupyter GAP Kernel](https://github.com/gap-packages/JupyterKernel)

See [Graphics Semantics Package for GAP](/gap)

# Package Structure

|||
|:-------------------------------------|:---|
| scripts    | contains scripts used by travis to set-up the environment and release process|
| notebooks  | contains some notebooks with francy examples   |
| js         | contains the source code of francy-js | 
| gap        | contains the source code of francy-gap |
| extensions | contains the extensions built for Jupyter Notebook and Lab |

# License

[MIT](LICENSE) License
