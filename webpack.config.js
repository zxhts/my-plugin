const path = require('path');
const MyPlugin = require('./plugins/my-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name]-[chunkhash:8].js',
  },
  mode: 'production',
  plugins: [new MyPlugin({ name: 'my plugin' })],
};
