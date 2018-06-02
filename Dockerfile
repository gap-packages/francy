FROM jupyter/scipy-notebook:2bfbb7d17524

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

USER root

ENV NB_USER gap
ENV NB_UID 1000
ENV HOME /home/${NB_USER}
ENV GAPROOT "/home/gap/inst"

RUN adduser --disabled-password \
    --gecos "Default user" \
    --uid ${NB_UID} \
    ${NB_USER}
    
COPY . /home/gap/francy

# update dependencies
RUN apt-get update && apt-get install -yq curl && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
  && apt-get install -yq nodejs build-essential python3.4 python3-pip \
  && npm install -g npm && pip install jupyter && pip3 install jupyter && pip3 install jupyterlab && pip install jupyterlab

RUN chown -R gap /home/gap && cd /home/gap/francy/scripts && bash prepare.sh

# lab extension installation
RUN cd /home/gap/francy/extensions/jupyter && npm run build:all && pip3 install -e . && jupyter labextension link

# notebook extension installation - this is an hack!
RUN jupyter nbextension install --symlink --py --sys-prefix jupyter_francy && jupyter nbextension enable --py --sys-prefix jupyter_francy

# NOTE: THIS IS FOR DEVELOPMENT ONLY!
# IF YOU ARE LOOKING HOW TO MAKE JUPYTER_FRANCY WORK, YOU JUST NEED TO: pip install jupyter_francy

WORKDIR /home/gap/francy/notebooks

USER gap
