const path = require('path')

module.exports = {
  mode: 'production',
  entry:{
    index:'./src/index.js'
  },
  output:{
    path:path.join(__dirname,'/dist/'),
    filename:'[name].js',
    library:'better-storage',
    libraryTarget:'umd'
  },
  module:{
    rules:[
      {                             
        test: /(\.js)$/,   
        use: { 
          loader: "babel-loader",
          options: {
            presets: [
              "env"
            ]
          }
        },
        exclude: /node_modules/
      }
    ]
  }
}