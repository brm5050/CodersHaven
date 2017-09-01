const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

module.exports = {
    entry: {
        app: ['./index.js']
    },
    output: {
        path: path.resolve('./public'),
        filename: 'bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js']
    },
    module: {
        rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          query:
              {
                presets:['react', 'es2015']
              }
        }
        ]
    },
     target: 'node'
};