FROM sebasguts/gapbinder:20171020

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

USER root

COPY . /home/gap

RUN jupyter nbextension install /home/gap/js/dist/francy --system
RUN jupyter nbextension enable francy/jupyter/main --system
RUN ln -s /home/gap/gap /home/gap/inst/gap-master/pkg/francy
