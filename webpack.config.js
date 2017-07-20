let path = require('path');
let webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        path.join(__dirname, 'src', 'index.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                loaders: ['eslint-loader'],
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                loaders: ['babel-loader'],
                include: [path.resolve(__dirname, "src")],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    'postcss-loader'
                ]
            }
        ]
    }
};