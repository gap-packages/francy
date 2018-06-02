FROM jupyter/scipy-notebook:2bfbb7d17524

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

USER root

ENV GAPROOT ${HOME}/inst
    
COPY . ${HOME}/francy

# update dependencies
RUN apt-get update && apt-get install -yq curl && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
  && apt-get install -yq nodejs libtool pkg-config build-essential autoconf automake uuid-dev libzmq3-dev && npm install -g npm

RUN fix-permissions ${HOME} && cd ${HOME}/francy && bash scripts/prepare.sh

# lab extension installation
RUN fix-permissions ${HOME} && cd ${HOME}/francy/extensions/jupyter && npm run build:all && pip install -e . && jupyter labextension link

# notebook extension installation
RUN fix-permissions ${HOME} && cd ${HOME}/inst/pkg/JupyterKernel && python setup.py install --user \
  && jupyter nbextension install --symlink --py --sys-prefix jupyter_francy && jupyter nbextension enable --py --sys-prefix jupyter_francy

RUN fix-permissions ${HOME}

WORKDIR ${NB_USER}/francy/notebooks

USER ${NB_UID}
