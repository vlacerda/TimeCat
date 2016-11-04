module.exports = {
    entry: {
      polyfills : './app/polyfills.ts',
      vendors   : './app/vendors.ts',
      app       : './app/main.ts',
    },
    output: {
      path: './dist',
      filename: '[name].js'
    },
    resolve: {
      extensions: ['', '.ts', '.js']
    },
    module: {
      loaders: [
        { test: /\.ts$/, loader: 'ts-loader' }
      ]
    }
 };