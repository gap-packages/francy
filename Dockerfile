FROM ubuntu:22.10

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

ARG DEBIAN_FRONTEND="noninteractive"
ARG WGET="wget -N --no-check-certificate --tries=5 --waitretry=5 --retry-connrefused"

RUN apt update && apt -qq install -y git curl wget python3-pip inkscape pandoc texlive-xetex libgmp-dev libreadline-dev graphviz \
    zlib1g-dev libzmq3-dev gcc g++ make autoconf && useradd -s /bin/bash -d /home/gap/ -m -G sudo gap && \
    git clone --depth=2 -b master https://github.com/gap-system/gap.git /home/gap/master && cd /home/gap/master && \
    ./autogen.sh && ./configure && make -j4 V=1 && ln -s /home/gap/master/bin/gap.sh /usr/local/sbin/gap && \
    make bootstrap-pkg-minimal DOWNLOAD="$WGET" WGET="$WGET" &&  \
    cd /home/gap/master/pkg && rm -rf /home/gap/master/pkg/francy && \
    git clone https://github.com/gap-packages/JupyterKernel &&  \
    git clone https://github.com/gap-packages/FrancyMonoids && \
    git clone https://github.com/gap-packages/francy && \
    git clone https://github.com/mcmartins/subgroup-lattice && \
    for pkg in 'io profilling json uuid crypting zeromqinterface jupyterkernel'; do ../bin/BuildPackages.sh --strict $pkg*; done &&  \
    rm -rf /home/gap/master/packages-required.tar.gz && chown -R gap:gap /home/gap/master/ && \
    apt purge git gcc g++ make autoconf curl wget -y

USER gap

ENV PATH="${PATH}:/home/gap/.local/bin"

# jupyter lab extension installation
RUN pip install jupyterlab jupyterlab-francy

WORKDIR /home/gap/master/pkg/francy/notebooks

CMD jupyter lab --port=8080
