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

// Dirname
console.log(chalk.magenta('name.dir:\n') +      _.map(arr, name.dir).join('\n') + '\n');
console.log(chalk.magenta('path.dirname:\n') +  _.map(arr, path.dirname).join('\n') + '\n');
console.log(chalk.magenta('__dirname:\n') +     __dirname + '\n');

// Filename
console.log(chalk.magenta('name.file:\n') +     _.map(arr, name.file).join('\n') + '\n');
console.log(chalk.magenta('filename:\n') +      _.map(arr, name.filename).join('\n') + '\n');
console.log(chalk.magenta('__filename:\n') +    __filename + '\n');

// Basename
console.log(chalk.magenta('name.base:\n')   +   _.map(arr, name.base).join('\n') + '\n');
console.log(chalk.magenta('path.basename:\n') + _.map(arr, path.basename).join('\n') + '\n');

// Extension
console.log(chalk.magenta('name.ext:\n') +      _.map(arr, name.ext).join('\n') + '\n');
console.log(chalk.magenta('path.extname:\n') +  _.map(arr, path.extname).join('\n') + '\n');

// Test
console.log(chalk.cyan.bold('Full string:\n') + _.map(arr).join('\n').replace(/(\/|\.)/g, chalk.bold('$1')) + '\n');

// console.log(module);

