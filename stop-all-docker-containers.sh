#!/bin/bash
###############################################################
# WARNING!  This should only be used locally, do NOT use
# in a CI / Build Server
###############################################################

echo 'Shutting down docker'

docker kill $(docker ps -a -q)
docker rm -v $(docker ps -a -q)
