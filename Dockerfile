FROM jupyter/scipy-notebook:2bfbb7d17524

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

USER root

ENV NB_USER gap
ENV NB_UID 1000
ENV HOME /home/${NB_USER}
ENV GAPROOT /home/${NB_USER}/inst
    
COPY . /home/${NB_USER}/francy

# update dependencies
RUN chown -R ${NB_UID} /home/${NB_USER}  \
  && apt-get update && apt-get install -yq curl && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
  && apt-get install -yq nodejs libtool pkg-config build-essential autoconf automake uuid-dev libzmq3-dev && npm install -g npm

USER ${NB_UID}

RUN cd /home/${NB_USER}/francy && bash scripts/prepare.sh

# lab extension installation
RUN cd /home/${NB_USER}/francy/extensions/jupyter && npm run build:all && pip install -e . && jupyter labextension link

# notebook extension installation - this is an hack!
RUN cd /home/${NB_USER}/inst/pkg/JupyterKernel && python setup.py install --user \
  && jupyter nbextension install --symlink --py --sys-prefix jupyter_francy && jupyter nbextension enable --py --sys-prefix jupyter_francy

WORKDIR /home/${NB_USER}/francy/notebooks

RUN chown -R ${NB_UID} /home/${NB_USER}
