#!/bin/bash

# Start the ng2Do dev stack

# Make sure any rouge node processes are stopped
killall node

mongod &
cd api && nodemon app.js &
cd client && gulp && fg
