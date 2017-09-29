#!/bin/bash

echo -e "---building frontend---\n\n"
cd frontend
npm install
rm -rf build
npm run build

echo -e "---starting server---\n\n"
cd ../backend
npm install
node server.js
