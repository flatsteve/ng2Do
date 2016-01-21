#!/bin/bash

# Start the ng2Do dev stack

mongod &
cd api && nodemon app.js &
cd client && gulp && fg
