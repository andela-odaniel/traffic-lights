const Autoprefixer = require('autoprefixer');
const PostCssVr = require('postcss-vr');
const PostCssFocus = require('postcss-focus');
const PostCssPxToRem = require('postcss-pxtorem');

module.exports = {
  plugins: [Autoprefixer, PostCssVr, PostCssFocus, PostCssPxToRem],
};
