const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const imageDimensions = require('image-size')(path.resolve(__dirname, 'src/images/me.jpeg'))

function cv (language, url) {
    const locale = require(`date-fns/locale/${language}`)
    const formatDate = require('date-fns/format')
    return new HtmlPlugin({
        template: './template.pug',
        filename: url,
        language,
        format: (date, format, options) => {
            return formatDate(date, format, Object.assign({
                locale
            }, options))
        },
        url: url.indexOf('/') >= 0 ? (path.dirname(url) + '/') : '',
        imageDimensions
    })
}

module.exports = {
    entry: './',
    context: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name]-[hash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                use: 'babel-loader'
            },
            {
                test: /\.(jpg|jpeg|png|gif|ico)$/,
                use: 'file-loader'
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            }
        ]
    },
    plugins: [
        new CleanPlugin(['dist']),
        cv('en', 'index.html'),
        cv('sv', 'sv/index.html'),
        new ExtractTextPlugin({
            filename: '[name]-[contenthash].css',
            disable: process.env.NODE_ENV !== 'production'
        })
    ]
}