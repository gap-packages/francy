# francy

A JupyterLab and Jupyter Notebook extension for rendering francy

![output renderer](http://g.recordit.co/QAsC7YULcY.gif)

## Prerequisites

* JupyterLab ^0.28.0 and/or Notebook >=4.3.0

## Usage

To render francy output in IPython:

```python
from francy import francy

francy({
    "string": "string",
    "array": [1, 2, 3],
    "bool": True,
    "object": {
        "foo": "bar"
    }
})
```

## Install

```bash
pip install francy
# For JupyterLab
jupyter lab build
# For Notebook
jupyter nbextension enable --py --sys-prefix francy
```

## Development

```bash
pip install -e .
# For JupyterLab
jupyter labextension link
jupyter lab --watch
# For Notebook
jupyter nbextension install --symlink --py --sys-prefix francy
jupyter nbextension enable --py --sys-prefix francy
```
