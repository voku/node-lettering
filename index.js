/**
 * lettering
 * https://github.com/voku/node-lettering
 *
 * Copyright (c) 2015 Lars Moelleken
 * Licensed under the MIT license.
 */

/**
 * wrap every letter from a string with a unique "span"-tag
 *
 * @param  {String} str
 * @return {String}
 */
module.exports = {
  lettering: function(str) {
    var output = '';
    var chunks = [];
    var chunksLength = 0;
    var len = str.length;
    var pos = 0;
    var idx = 1;
    var i;

    str += '';
    while (pos < len) {
      chunks.push(str.slice(pos, pos += 1))
    }

    chunksLength = chunks.length;
    for (i = 0; i <= chunksLength; i++) {
      if (typeof chunks[i] == 'undefined') {
        continue;
      }

      output += '<span class="char' + idx++ + '">' + chunks[i] + '</span>';
    }

    return String(output);
  },

};
