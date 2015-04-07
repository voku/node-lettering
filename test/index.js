var should = require('chai').should(),
    node_lettering = require('../index'),
    lettering = node_lettering.lettering;

describe('#lettering', function() {
  it('wrap chars from one word with span-tag', function() {
    lettering('test').should.equal('<span class=\"char1\">t</span><span class=\"char2\">e</span><span class=\"char3\">s</span><span class=\"char4\">t</span>');
  });

  it('wrap one char with span-tag', function() {
    lettering('ö').should.equal('<span class=\"char1\">ö</span>');
  });

  it('wrap one char (with space) with span-tag', function() {
    lettering(' ö ').should.equal('<span class=\"char1\"> </span><span class=\"char2\">ö</span><span class=\"char3\"> </span>');
  });

});
