FROM sebasguts/gapbinder:20171020

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

USER root

RUN git clone https://github.com/mcmartins/francy.git
RUN jupyter nbextension install francy/js/dist/francy --system
RUN jupyter nbextension enable francy/jupyter/main --system
RUN mv francy/gap /home/gap/inst/gap-master/pkg/francy

RUN git clone https://github.com/mcmartins/subgroup-lattice.git
RUN mv subgroup-lattice /home/gap/inst/gap-master/pkg/

#RUN git clone https://github.com/mcmartins/interactive-todd-coxeter.git
#RUN mv interactive-todd-coxeter /home/gap/inst/gap-master/pkg/

COPY . /home/gap
