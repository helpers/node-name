/*
 * node-name
 * https://github.com/helpers/node-name
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

// Node dependencies.
var path = require('path');


// Export this module.
var name = module.exports = exports = {}


/**
 * Directory path, excluding the filename
 * @param  {[type]} path [description]
 * @return {[type]}      [description]
 */
name.dir = function(path) {
  return path.split(path.sep).pop().split('.')[0];
};



/**
 * Filename
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
name.file = function(name) {
  return path.basename(name).replace(/\.[^\.]+$/, '');
};



/**
 * Filename
 * @param  {[type]} filepath [description]
 * @return {[type]}          [description]
 */
name.filename = function(filepath) {
  return filepath.split('\\').pop().split('/').pop();
};



/**
 * Name of the file.
 * @param  {[type]} base [description]
 * @param  {[type]} ext  [description]
 * @return {[type]}      [description]
 */
name.base = function(filepath) {
  return path.basename(filepath, path.extname(filepath));
};



/**
 * Returns the basename of a file, with dots and
 * underscores transformed to dashes.
 * @param  {[type]} filepath [description]
 * @return {[type]}          [description]
 */
name.basename = function(filepath) {
  var base = filepath.split(path.sep).slice(-1)[0];
  base = path.basename(filepath, path.extname(filepath));
  if (base.lastIndexOf('.') > 0) {
    base = base.substr(0, base.lastIndexOf('.'));
  }
  return base.replace(/\-|\_|\./g, '-');
};



/**
 * File extension
 * @param  {[type]} str [description]
 * @return {[type]}     [description]
 */
name.ext = function(str) {
  var extname = path.extname(str);
  if (extname) {
    str = extname;
  }
  if (str[0] === ".") {
    str = str.substring(1);
  }
  return str;
};
