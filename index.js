/*!
 * extract-description <https://github.com/jonschlinkert/extract-description>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function description(str) {
  str = str.replace(/\r/g, '');
  var lines = str.split('\n').filter(Boolean);
  var len = lines.length;
  var res = '';
  var i = 0;

  while (len--) {
    var line = lines[i++];
    if (/^\s*[\w>]/.test(line)) {
      res = line;
      break;
    }
  }
  return clean(res);
};

function clean(str) {
  return str.replace(/^\W*/, '');
}
