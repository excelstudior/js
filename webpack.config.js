const path=require('path');
const {CleanWebpackPlugin}=require('clean-webpack-plugin');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,"dist"),
        filename:'[name].js'
    },
    module:{
        rules:[{
            test:/\.css$/,
            use:['style-loader','css-loader'],
            include:path.join(__dirname,'public/css'),
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
            include:path.join(__dirname,'public/img'),
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
            template:'./src/index.html'
        })
    ],
    devServer:{
        contentBase:path.join(__dirname,"dist"),
        port:9090,
        host:'localhost',
        overlay:true,
        compress:true
    }
}