FROM jupyter/scipy-notebook:2bfbb7d17524

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

USER root

ENV GAPROOT $HOME/inst
ENV JUPYTER_GAP_EXECUTABLE $GAPROOT/bin/gap.sh
    
COPY --chown=1000:100 . $HOME/francy

# update dependencies
RUN apt-get update && apt-get install -yq curl && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
  && apt-get install -yq nodejs libtool pkg-config build-essential autoconf automake uuid-dev libzmq3-dev && npm install -g npm \
  && chown -R 1000:100 $HOME

USER $NB_UID

RUN cd $HOME/francy && bash scripts/prepare.sh

# lab extension installation
RUN cd $HOME/francy/extensions/jupyter && pip install -e . && jupyter labextension link

# notebook extension installation
#RUN cd $GAPROOT/pkg/JupyterKernel && python setup.py install --user \
#  && jupyter nbextension install --symlink --py --sys-prefix jupyter_francy && jupyter nbextension enable --py --sys-prefix jupyter_francy
RUN cd $GAPROOT/pkg/JupyterKernel && python setup.py install --user \
  && echo 'export PATH="$PATH:$GAPROOT/pkg/JupyterKernel/bin"' >> ~/.bashrc \
  && ln -s $GAPROOT/pkg/JupyterKernel/bin/jupyter-kernel-gap $HOME/.local/share/jupyter/kernels/gap-native/jupyter-kernel-gap \
  && mv $HOME/francy/extensions/jupyter/jupyter_francy/nbextension $HOME/francy/extensions/jupyter/jupyter_francy/jupyter_francy \
  && jupyter nbextension install $HOME/francy/extensions/jupyter/jupyter_francy/jupyter_francy --user \
  && jupyter nbextension enable jupyter_francy/extension --user

WORKDIR $HOME/francy/notebooks
