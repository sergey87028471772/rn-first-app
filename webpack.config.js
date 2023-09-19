
const path = require('path');
const appDirectory = path.resolve(__dirname, './');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { presets } = require(`${appDirectory}/babel.config.js`);

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /.(js|jsx|tsx)/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(appDirectory, 'src'),
    path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
      presets: presets,

      // Re-write paths to import only the modules needed by the app
      plugins: ['react-native-web'],
    },
  },
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
  type: 'asset/resource',
};

module.exports = {
  // load any web API polyfills
  entry: {
    app: path.resolve(appDirectory, 'index.web.js')
  },

  // configures where the build ends up
  output: {
    filename: 'bundle.web.js',
    path: path.resolve(appDirectory, 'dist'),
  },

  // ...the rest of your config

  module: {
    rules: [imageLoaderConfiguration, babelLoaderConfiguration, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }],
  },

  resolve: {
    // This will only alias the exact import "react-native"
    alias: {
      'react-native$': 'react-native-web',
      '~': path.resolve(__dirname, 'src'),
    },
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: ['.web.js', '.js', '.ts', '.tsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: appDirectory + '/index.html',
    }),
  ],
};