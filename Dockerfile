FROM gapsystem/gap-docker-master:francy

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

COPY --chown=1000:100 . $HOME/francy

# lab extension installation
RUN ls -lrt $HOME && cd $HOME/francy/js && npm install && npm run build:all \
  && cd $HOME/francy/extensions/jupyter && npm install && npm run build:all && pip install -e . && jupyter labextension link \
  && mv $HOME/francy/extensions/jupyter/jupyter_francy/nbextension $HOME/francy/extensions/jupyter/jupyter_francy/jupyter_francy \
  && jupyter nbextension install $HOME/francy/extensions/jupyter/jupyter_francy/jupyter_francy --user \
  && jupyter nbextension enable jupyter_francy/extension --user
