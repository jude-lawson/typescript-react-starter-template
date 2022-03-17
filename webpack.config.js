const path = require('path')

module.exports = {
  // determines the root file to map from for the whole bundle
  entry: './src/index.tsx',
  // the optimization level at which webpack will operate
  mode: 'development',
  // rules for using different loaders for different file types (modules)
  module: {
    rules: [
      // load .ts and .tsx files with ts-loader
      {
        // regex to determine file type
        test: /\.tsx?$/,
        // which loader to use for files that pass the test
        use: 'ts-loader',
        // don't test files that match the regex below
        exclude: /node_modules/,
      },
    ],
  },
  // determines the way that webpack will resolve files
  resolve: {
    // this array creates a hierarchy of how files will be resolved
    // finding the first extension in the list and skipping the rest
    extensions: ['.tsx', '.ts', '.js'],
  },
  // these setting concern where the code bundled by webpack will be placed
  output: {
    // the base path for the transpiled bundle, where the bundled code will live
    path: path.resolve(__dirname, 'dist/'),
    // the path where assets can be accessed, by browsers, etc.
    publicPath: '/dist/',
    // the actual filename of the outputted bundle
    filename: 'bundle.js',
  },
  // configuration for the webpack-dev-server
  devServer: {
    // which static files to serve
    static: {
      // where are the statis files
      directory: path.join(__dirname, 'public'),
      // the basepath for the served files; '/' is the default, but I want to be explicit
      publicPath: '/',
    },
    // compress the files with gzip, yay performance
    compress: true,
    // the port on which to serve the files
    port: 3000,
    // tells webpack to hot reload; 'only' indicates to not use page refreshes on save as a fallback
    hot: 'only',
  }
}
