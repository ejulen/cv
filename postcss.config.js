module.exports = {
    plugins: [
        require('postcss-smart-import')(),
        require('lost')(),
        require('autoprefixer')()
    ]
}