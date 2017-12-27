module.exports = {
    entry: "./src/app.js",
    output: {
        filename: "./dist/build.js"
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                },{
                    loader: 'css-loader'
                },{
                    loader: 'less-loader'
                }]
            }
        ]
    }
}