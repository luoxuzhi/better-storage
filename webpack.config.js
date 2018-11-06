module.exports = {
  entry:{
    storage:'./index.js'
  },
  output:{
    path:__dirname,
    filename:'[name].js',
    library:'storage',
    libraryTarget:'umd'
  }
}