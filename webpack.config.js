var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './src/popover.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'react-popover.js',
    library: 'ReactPopover',
    libraryTarget: 'commonjs',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    root: [
      path.resolve('./src')
    ],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      include: path.resolve('./src'),
      loaders: ['babel'],
    }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  externals: {
    'react': {
      'commonjs': 'react',
      'commonjs2': 'react',
      'amd': 'react',
      // React dep should be available as window.React, not window.react
      'root': 'React'
    },
    'react-dom': {
      'commonjs': 'react-dom',
      'commonjs2': 'react-dom',
      'amd': 'react-dom',
      'root': 'ReactDOM'
    }
  }
};
