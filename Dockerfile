FROM sebasguts/gapbinder:20171020

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

USER root

RUN git clone -b develop https://github.com/mcmartins/francy.git
RUN jupyter nbextension install /home/gap/francy/js/dist/francy --system
RUN jupyter nbextension enable francy/jupyter/main --system
RUN ln -s /home/gap/francy/gap /home/gap/inst/gap-master/pkg/francy

COPY . /home/gap

