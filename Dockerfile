FROM gapsystem/gap-docker-master:latest

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

COPY --chown=1000:1000 . $HOME/francy

USER root

RUN apt-get update && apt-get install python3-pip -y

RUN rm -rf $HOME/inst/gap-master/pkg/francy && mv $HOME/francy $HOME/inst/gap-master/pkg/francy \
  && cd $HOME/inst/gap-master/pkg \
  && rm -rf JupyterKernel && git clone https://github.com/gap-packages/JupyterKernel \
  && git clone https://github.com/gap-packages/FrancyMonoids \
  && git clone https://github.com/mcmartins/subgroup-lattice

RUN apt-get -qq install -y curl \
    && curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - \
    && apt-get install -yq nodejs && npm install npm@latest -g

# notebook and lab extension installation
RUN cd $HOME/inst/gap-master/pkg/francy/js && npm install --unsafe-perm && npm run bootstrap && npm run build:jupyter \
  && cd $HOME/inst/gap-master/pkg/francy/js/packages/francy-extension-jupyter && pip3 install -e . \
  && jupyter nbextension install --symlink --py --sys-prefix jupyter_francy \
  && jupyter nbextension enable --py --sys-prefix jupyter_francy \
  && cd $HOME/inst/gap-master/pkg/francy/js/packages/francy-extension-jupyter/jupyter_francy/labextension && jupyter labextension install

USER gap

WORKDIR $HOME/inst/gap-master/pkg/francy/notebooks
