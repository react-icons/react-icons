var path = require('path');

var webpackConfigs = {
    entry: path.join(__dirname, 'app'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js',
        publicPath: "/dist"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader?stage=0'
            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    }
};

module.exports = webpackConfigs;