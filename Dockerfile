FROM jupyter/minimal-notebook:latest

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

USER root

ARG DEBIAN_FRONTEND="noninteractive"
ARG WGET="wget -N --no-check-certificate --tries=5 --waitretry=5 --retry-connrefused"

RUN apt update && apt -qq install -y git curl wget python3-pip inkscape pandoc texlive-xetex libgmp-dev libreadline-dev graphviz \
    zlib1g-dev libzmq3-dev gcc g++ make autoconf && \
    git clone --depth=2 -b master https://github.com/gap-system/gap.git /opt/master && cd /opt/master && \
    ./autogen.sh && ./configure && make -j4 V=1 && \
    make bootstrap-pkg-full DOWNLOAD="$WGET" WGET="$WGET" &&  \
    cd /opt/master/pkg && rm -rf /opt/master/pkg/francy && \
    git clone https://github.com/gap-packages/FrancyMonoids && \
    git clone https://github.com/gap-packages/francy && \
    git clone https://github.com/mcmartins/subgroup-lattice && \
    git clone https://github.com/gap-packages/OrbitalGraphs && \
    for pkg in `ls`; do ../bin/BuildPackages.sh --strict $pkg*; done &&  \
    rm -rf /opt/master/packages.tar.gz && chown -R jovyan: /opt/master/ && \
    cd /opt/master/pkg/jupyterkernel && pip install . && \
    ln -s /opt/master/pkg/francy/notebooks /home/jovyan/notebooks && \
    ln -s /opt/master/bin/gap.sh /usr/local/sbin/gap && \
    apt purge git gcc g++ make autoconf curl wget -y

USER jovyan

# jupyter lab extension installation
RUN pip install --no-cache-dir jupyterlab jupyterlab-francy && rm -rf /home/jovyan/.jupyter/*
