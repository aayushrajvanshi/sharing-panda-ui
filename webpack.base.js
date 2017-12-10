const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: [
        'script-loader!jquery/dist/jquery.min.js',
        'script-loader!uikit/dist/js/uikit.min.js',
        'script-loader!uikit/dist/js/uikit-icons.min.js',
    ],
    externals: {
        jquery: 'jQuery',
        $: 'jQuery'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.scss', '.html']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.(css)$/,
                loader: ['style-loader', 'css-loader']
            }, {
                test: /\.(scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            // query: {
                            //     localIdentName: '[hash:8]',
                            //     modules: true
                            // }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            }, {
                test: /\.(jpe?g|png|gif)$/i,
                use: [{
                    loader: 'file-loader?hash=sha512&digest=hex&name=./images/[hash:9].[ext]'
                }, {
                    loader: 'image-webpack-loader?bypassOnDebug=false'
                }]
            }, {
                test: /\.(woff|ttf|eot|woff2|svg)$/i,
                use: [{
                    loader: 'file-loader?hash=sha512&digest=hex&name=./fonts/[name].[ext]'
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles/app.css',
            disable: false,
            allChunks: true
        })]
};
