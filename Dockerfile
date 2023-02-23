FROM jupyter/base-notebook:latest

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

USER root

ARG DEBIAN_FRONTEND="noninteractive"
ARG WGET="wget -N --no-check-certificate --tries=5 --waitretry=5 --retry-connrefused"

RUN apt update && apt -qq install -y git curl wget python3-pip inkscape pandoc texlive-xetex libgmp-dev libreadline-dev graphviz \
    zlib1g-dev libzmq3-dev gcc g++ make autoconf && \
    git clone --depth=2 -b master https://github.com/gap-system/gap.git /home/jovyan/master && cd /home/jovyan/master && \
    ./autogen.sh && ./configure && make -j4 V=1 && ln -s /home/jovyan/master/bin/gap.sh /usr/local/sbin/gap && \
    make bootstrap-pkg-minimal DOWNLOAD="$WGET" WGET="$WGET" &&  \
    cd /home/jovyan/master/pkg && rm -rf /home/jovyan/master/pkg/francy && \
    git clone https://github.com/gap-packages/JupyterKernel &&  \
    git clone https://github.com/gap-packages/FrancyMonoids && \
    git clone https://github.com/gap-packages/francy && \
    git clone https://github.com/mcmartins/subgroup-lattice && \
    for pkg in 'io profilling json uuid crypting zeromqinterface jupyterkernel'; do ../bin/BuildPackages.sh --strict $pkg*; done &&  \
    rm -rf /home/jovyan/master/packages-required.tar.gz && chown -R jovyan: /home/jovyan/master/ && \
    apt purge git gcc g++ make autoconf curl wget -y

USER jovyan

ENV PATH="${PATH}:/home/gap/.local/bin"

# jupyter lab extension installation
RUN pip install jupyterlab jupyterlab-francy

WORKDIR /home/jovyan/master/pkg/francy/notebooks
