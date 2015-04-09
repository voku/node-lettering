[![Build Status](https://travis-ci.org/voku/node-lettering.svg?branch=master)](https://travis-ci.org/voku/node-lettering)

=========
only a demo for http://voku.github.io/OPEN-SOURCE
=========

A minimal node module providing utility methods to wrap every letter from a
string with a unique 'span'-tag

## Installation

```shell
  npm install node-lettering --save
```

## Usage

```js
  var node_lettering = require('node-lettering')
      lettering = node_lettering.lettering;

  var string = 'test';
  var string_lettering = lettering(html);

  // <span class=\"char1\">t</span><span class=\"char2\">e</span><span class=\"char3\">s</span><span class=\"char4\">t</span>
```

## Tests

```shell
   npm test
```

## Contributing

Add unit tests for any new or changed functionality.

## Release History

* 0.1.0 Initial release
