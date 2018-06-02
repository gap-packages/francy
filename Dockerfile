FROM jupyter/scipy-notebook:2bfbb7d17524

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

USER root

ENV NB_USER gap
ENV NB_UID 1000
ENV HOME /home/${NB_USER}
ENV GAPROOT "/home/${NB_USER}/inst"
    
COPY . /home/${NB_USER}/francy

# update dependencies
RUN apt-get update && apt-get install -yq curl && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
  && apt-get install -yq nodejs build-essential && npm install -g npm

RUN chown -R ${NB_UID} /home/${NB_USER} && cd /home/${NB_USER}/francy/scripts && bash prepare.sh

# lab extension installation
RUN cd /home/${NB_USER}/francy/extensions/jupyter && npm run build:all && pip install -e . && jupyter labextension link

# notebook extension installation - this is an hack!
RUN jupyter nbextension install --symlink --py --sys-prefix jupyter_francy && jupyter nbextension enable --py --sys-prefix jupyter_francy

# NOTE: THIS IS FOR DEVELOPMENT ONLY!
# IF YOU ARE LOOKING HOW TO MAKE JUPYTER_FRANCY WORK, YOU JUST NEED TO: pip install jupyter_francy

WORKDIR /home/${NB_USER}/francy/notebooks

USER ${NB_UID}
