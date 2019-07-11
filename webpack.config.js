const path=require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'bundle.[hash:8].js'
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:[ MiniCssExtractPlugin.loader,'css-loader'],//start from right
            include:path.resolve(__dirname,'public/css'),
            exclude:/node_modules/
        }, {
            test:/\.js$/,
            include:[
                path.resolve(__dirname,'src')
            ],
            loader:'babel-loader',
            options:{
                presets:['@babel/preset-env','@babel/preset-react'],
                plugins:['@babel/plugin-proposal-class-properties']
            },
            exclude: /node_modules/
        },{
            test:/\.(png|jpg|gif)$/,
            use:[{
                loader:'file-loader'
            }]
        }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'Simple',
            template:'./src/index.html',
            filename:'index.html',
            minify:{
                removeAttributeQuotes:true,
                collapseWhitespace:true,
            },
            hash:true
        }),
        new MiniCssExtractPlugin({
            filename:'main.css'
        })
    ],
    devServer:{
        contentBase:path.resolve(__dirname,"dist"),
        port:3000,
        host:'localhost',
        overlay:true,
        compress:true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
          }
    }
}