# Francy Jupyter Extension - jupyter_francy

A JupyterLab and Jupyter Notebook extension for rendering mime 'application/vnd.francy+json'

![output renderer](http://g.recordit.co/QAsC7YULcY.gif)

## Install

```bash
pip install jupyter_francy
# For JupyterLab
jupyter lab build
# For Notebook
jupyter nbextension enable --py --sys-prefix jupyter_francy
```

## Development

```bash
pip install -e .
# For JupyterLab
jupyter labextension link
jupyter lab --watch
# For Notebook
jupyter nbextension install --symlink --py --sys-prefix jupyter_francy
jupyter nbextension enable --py --sys-prefix jupyter_francy
```
