'use strict';

var test = require('tape');
var displayName = require('../lib');

test('should be able to process an empty data element', function(assert) {
  assert.equal(displayName(['title'], {}), '');
  assert.equal(displayName([], {}), '');
  assert.equal(displayName([], undefined), '');
  assert.equal(displayName(['name', 'phone'], {}), '');
  assert.end();
});

test('should be able to deal with empty templates', function(assert) {
  assert.equal(displayName([], {
    name: 'Foo'
  }), '');
  assert.end();
});

test('should be able to do complex templates', function(assert) {
  assert.equal(displayName(['title', 'first', 'last'], {
    title: 'mr',
    first: 'antonio',
    last: 'job'
  }), 'mr antonio job');
  assert.end();
});

test('should be able to remove element that do not exist', function(assert) {
  assert.equal(displayName(['title', 'first', 'last'], {
    title: 'mr',
    last: 'job'
  }), 'mr job');
  assert.end();
});

//
//
//
