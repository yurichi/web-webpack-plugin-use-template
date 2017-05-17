const path = require('path');
const { WebPlugin, AutoWebPlugin } = require('web-webpack-plugin');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    entry: {
        A: './a',
        B: './b',
    },
    plugins: [
        new WebPlugin({
            filename: 'index.html',
            // html模版文件路径（相对于webpack.config.js的完整路径）
            template: './template.html',
            requires: ['A', 'B'],
        }),
    ]
};