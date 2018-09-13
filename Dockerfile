FROM gapsystem/gap-docker-master:francy

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

COPY --chown=1000:1000 . $HOME/francy

USER root

RUN apt-get update && apt-get install python3-pip -y

RUN rm -rf $HOME/inst/gap-master/pkg/francy && mv $HOME/francy/gap $HOME/inst/gap-master/pkg/francy \
  && cd $HOME/inst/gap-master/pkg && git clone --single-branch -b develop https://github.com/gap-packages/FrancyMonoids \
  && git clone https://github.com/mcmartins/subgroup-lattice

# notebook and lab extension installation
RUN cd $HOME/francy/js && npm install && cd $HOME/francy/js/packages/francy-extension/jupyter && npm run build:all \
  && pip3 install -e . && jupyter labextension link \
  && mv $HOME/francy/js/packages/francy-extension-jupyter/jupyter_francy/nbextension $HOME/francy/js/packages/francy-extension-jupyter/jupyter_francy/jupyter_francy \
  && jupyter nbextension install $HOME/francy/extensions/jupyter/jupyter_francy/jupyter_francy --user \
  && jupyter nbextension enable jupyter_francy/extension --user

USER gap

WORKDIR $HOME/francy/notebooks
