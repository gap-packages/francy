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

RUN mv /home/gap/francy/gap /home/gap/inst/gap/pkg/francy
RUN apt-get update && apt-get install -y nodejs npm python3.6 python3-pip
RUN pip3 install jupyter
RUN cd /home/gap/francy/js \
  && npm install && npm run webpack:all \
  && cd extensions/jupyter_francy && npm install && npm run build:all \
  && pip3 install -e . && jupyter labextension link

USER gap
