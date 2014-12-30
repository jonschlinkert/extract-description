/*!
 * extract-description <https://github.com/jonschlinkert/extract-description>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var fs = require('fs');
var assert = require('assert');
var extract = require('./');
var str = fs.readFileSync('README.md', 'utf8');
var pkg = require('./package.json');

describe('extract', function () {
  it('should equal', function () {
    assert.equal(extract(str), pkg.description);
  });
});

