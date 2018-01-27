# JUPYTER
#FROM sebasguts/gapbinder:20171020

#MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

#USER root

#COPY . /home/gap

# install francy js on jupyter
#RUN jupyter nbextension install /home/gap/js/dist/francy --system
#RUN jupyter nbextension enable francy/jupyter/main --system
# install francy gap on gap
#RUN ln -s /home/gap/gap /home/gap/inst/gap-master/pkg/francy

# read write permissions for notebooks, easier to change and save!
#RUN chmod +rw *.ipynb

# JUPYTER LAB
FROM sebasguts/gapbinder:20180132

MAINTAINER Manuel Martins <manuelmachadomartins@gmail.com>

COPY . /home/gap/francy

# install francy js on jupyter
USER root

RUN jupyter nbextension install /home/gap/francy/js/dist/francy --system
RUN jupyter nbextension enable francy/jupyter/main --system
RUN chown -R gap /home/gap/francy/ \
 && chgrp -R gap /home/gap/francy/
RUN mv /home/gap/francy/gap /home/gap/inst/gap/pkg/francy

USER gap
