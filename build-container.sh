#!/bin/bash

docker build -t neskan200/node-web-app .
docker run -p 3000:3000 --name app neskan200/node-web-app
