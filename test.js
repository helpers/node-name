/*
 * node-name
 * https://github.com/helpers/node-name
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */


var chalk = require('chalk');
var path = require('path');
var _ = require('lodash');

// This module.
var name = require('./');

var arr = [
  'foo.bar.baz.quux',
  'foo.bar.baz.quux',
  '/foo.bar.baz.quux',
  'foo/bar.baz.quux',
  'foo/bar.baz.quux/',
  'foo/bar/baz.quux',
  'foo/bar/baz.quux.',
  'foo.bar/baz.quux',
  '.foo.bar/baz.quux.',
  '.foo.bar/baz.quux',
  'foo/bar.baz/quux',
  'foo/bar/baz/quux',
  '/foo/bar/baz/quux',
  '/quux',
  '/quux/',
  'quux/',
  'foo/bar/baz/quux/',
  'foo/bar.baz.quux',
  '/foo/bar/baz/asdf/quux',
  '/foo/bar/baz/asdf/quux.html',
  '.html'
];



/**
 * Node.js examples, for comparison
 */


// name.ext
console.log(chalk.magenta('name.ext:\n') + arr.map(function (item) {
  return chalk.grey("name.ext: ") + item + chalk.green(" => ") + name.ext(item);
}).join('\n') + '\n');


// path.dirname
console.log(chalk.magenta('path.dirname:\n') + arr.map(function (item) {
  return chalk.grey("path.dirname: ") + item + chalk.green(" => ") + path.dirname(item);
}).join('\n') + '\n');

// Basename
console.log(chalk.magenta('path.basename:\n') + arr.map(function (item) {
  return chalk.grey("path.basename: ") + item + chalk.green(" => ") + path.basename(item);
}).join('\n') + '\n');

// Extname
console.log(chalk.magenta('path.extname:\n') + arr.map(function (item) {
  return chalk.grey("path.extname: ") + item + chalk.green(" => ") + path.extname(item);
}).join('\n') + '\n');



/**
 * name utils
 */

// name.dir
console.log(chalk.magenta('name.dir:\n') + arr.map(function (item) {
  return chalk.grey("name.dir: ") + item + chalk.green(" => ") + name.dir(item);
}).join('\n') + '\n');

// name.file
console.log(chalk.magenta('name.file:\n') + arr.map(function (item) {
  return chalk.grey("name.file: ") + item + chalk.green(" => ") + name.file(item);
}).join('\n') + '\n');

// name.filename
console.log(chalk.magenta('name.filename:\n') + arr.map(function (item) {
  return chalk.grey("name.filename: ") + item + chalk.green(" => ") + name.filename(item);
}).join('\n') + '\n');

// name.base
console.log(chalk.magenta('name.base:\n') + arr.map(function (item) {
  return chalk.grey("name.base: ") + item + chalk.green(" => ") + name.base(item);
}).join('\n') + '\n');

// name.basename
console.log(chalk.magenta('name.basename:\n') + arr.map(function (item) {
  return chalk.grey('name.basename: ') + item + chalk.green(" => ") + name.basename(item);
}).join('\n') + '\n');



// TODO: just a reminder to create a function dry this up.
// function example(name) {
//   for (var o in name) {
//     if (name.hasOwnProperty(o)) {
//       something(o, name[o]);
//     }
//   }
// }

// console.log(module);