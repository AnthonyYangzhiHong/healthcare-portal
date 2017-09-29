#!/bin/bash
###############################################################
# WARNING!  This should only be used locally, do NOT use
# in a CI / Build Server
###############################################################

echo 'Removing all images'

docker rm -v $(docker ps -a -q)
