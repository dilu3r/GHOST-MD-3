FROM node:16
RUN git clone https://github.com/KIND-GHOST/GHOST-MD-3.git /root/KIND-GHOST
WORKDIR /root/KIND-GHOST
RUN npm install
EXPOSE 3000
CMD ["npm","start" ] 
#FULL BOT 
