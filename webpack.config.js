const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
    entry:['@babel/polyfill','./src/js/index.js'],
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename:'js/bundle.js'
    },
    devServer:{
        static:{
            directory:path.join(__dirname, 'dist')
        },
        open:true,
        port: '3000'
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'./src/index.html'
        })
    ],
    module:{
        rules:[{
            test:/\.js$/,
            exclude:/node_modules/,
            use:
            {
                loader:'babel-loader'
            }
        }]
    }
    
}