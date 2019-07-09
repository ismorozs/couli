#!/bin/bash

./node_modules/webpack/bin/webpack.js --mode=development --env.NO_SOURCE_MAP
./node_modules/webpack/bin/webpack.js --mode=production