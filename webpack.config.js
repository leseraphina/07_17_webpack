//  설정
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
// module
module.exports ={
    entry:'./js/main.js',
    output:{
        // path:path.resolve(__dirname, 'dist'),
        // filename:'main.js',
        clean:true
    },
    module:{
    rules:[
        {test: /\.s?css/,
            use:[
                'style-loader',
                'css-loader',
                'sass-loader'
            ]},
        { test:/\.js$/,
        exclude:/node_modules/,
        use:[
        'babel-loader'
            ]
        }
        ]
    },
    plugins:[
        new HtmlPlugin({
            template:'./index.html'
        }),
        new CopyPlugin({
            patterns:[
                {from:'static'}
            ]
        })
    ]

}