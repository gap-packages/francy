FROM sebasguts/gapbinder:20180132

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

COPY . /home/gap/francy

USER root

ENV NB_USER gap
ENV NB_UID 1000
ENV HOME /home/${NB_USER}

# update dependencies
RUN ln -s /home/gap/francy/gap /home/gap/inst/gap/pkg/francy
RUN apt-get update && apt-get install -y nodejs npm python3.6 python3-pip

# lab extension installation
RUN cd /home/gap/francy/js \
  && npm install \
  && cd /home/gap/francy/gap \
  && npm install \
  && cd /home/gap/francy/extensions/jupyter \
  && npm install \
  && pip3 install -e . && jupyter labextension link

# notebook extension installation - this is an hack!
RUN mv /home/gap/francy/js/extensions/jupyter_francy/jupyter_francy/nbextension /home/gap/francy/js/extensions/jupyter_francy/jupyter_francy/jupyter_francy
RUN jupyter nbextension install /home/gap/francy/js/extensions/jupyter_francy/jupyter_francy/jupyter_francy --system
RUN jupyter nbextension enable jupyter_francy/extension --system
RUN cd /home/gap/inst/gap/pkg/JupyterKernel && git stash && git pull

# NOTE: THIS IS FOR DEVELOPMENT ONLY!
# IF YOU ARE LOOKING HOW TO MAKE JUPYTER_FRANCY WORK, YOU JUST NEED TO: pip install jupyter_francy

RUN chown -R gap /home/gap

RUN cd /home/gap/francy/notebooks

USER gap
