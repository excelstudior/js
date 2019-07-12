const path=require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack=require('webpack');
module.exports={
    optimization:{
        minimizer:[
            new OptimizeCssAssetsPlugin(),
            new UglifyJsPlugin({
                cache:true,
                sourceMap:true
            })
        ]
    },
    entry:['@babel/polyfill','./src/index.js'],
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:'bundle.[hash:8].js'
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:[MiniCssExtractPlugin.loader,'css-loader'],//start from right
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
                plugins:['@babel/plugin-proposal-class-properties',
                "@babel/plugin-transform-runtime",
                "@babel/plugin-transform-spread"],
            },
            exclude: /node_modules/
        },{
            test:/\.(png|jpg|gif)$/,
            use:{
                loader:'file-loader'
                ,options:{
                    outputPath:'img/'
                }
            }
        }
        ]
    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':'jquery'
        }),
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
            filename:'css/main.css'
        }),
        
    ],
    //watch:true,
    devtool:'eval-source-map',
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