module.exports={
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename:'[name].[hash].js'
    },
    module:{},
    plugin:{},
    devServer:{}
}