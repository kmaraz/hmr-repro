const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;

module.exports = () => {

  const context = path.resolve(__dirname, './app');

  const config = {
    context: context,

    entry: {
      admin: path.resolve(context, './index.ts')
    },

    resolve: {
      modules: ['app', 'node_modules'],
      extensions: ['.js', '.mjs', '.ts', '.css', '.scss']
    },

    output: {
      filename: "[name].[hash].js",
      path: path.join(__dirname, "dist")
    },

    devServer: {
      allowedHosts: ['localhost'],
      historyApiFallback: true,
      hot: true,
      https: true,
      port: 443,
      public: 'localhost:443',
      host: process.env.HOST || '0.0.0.0'
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './app/index.html'),
        inject: 'body'
      }),
      new AngularCompilerPlugin({
        tsConfigPath: path.join(__dirname, 'tsconfig.json'),
        mainPath: path.join(__dirname, 'app/index'),
        entryModule: path.join(__dirname, 'app/app.module#AppModule')
      }),
      new webpack.HotModuleReplacementPlugin()
    ],

    module: {
      rules: [{
        test: /(\.ngfactory\.js|\.ngstyle\.js|\.ts|\.js)$/,
        use: [
          {
            loader: '@ngtools/webpack',
          },
          'angular2-template-loader'
        ],
        exclude: [/node_modules/]
      }]
    },
    target: 'web',
    devtool: 'cheap-eval-source-map'
  };

  return config;
}
