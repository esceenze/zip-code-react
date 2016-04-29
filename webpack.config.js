module.exports = {
  entry: './main.js',
  output: {
    path: './',
    filename: 'index.js',
  },
  devServer: {
    inline: true,
    port: 3333,
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    modulesDirectories: ['node_modules'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['babel']
      },
      {
       test:   /\.css$/,
       loaders: [
          "css-loader"
        ]
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff|woff2)$/i,
        loader: 'url?limit=8192'
      }
    ]
  },
};
