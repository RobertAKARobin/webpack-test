const path = require('path');

module.exports = {
    devServer: {
        hot: false,
        inline: false,
        liveReload: false,
        port: 3000,
        publicPath: '/dist/',
        writeToDisk: true,
    },
    entry: {
        index: './src/index.js',
    },
    mode: 'development',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    watch: true,
};
