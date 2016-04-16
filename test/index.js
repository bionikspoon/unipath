import test from 'tape';
import unipath from '../src';
import path from 'path';

test('unipath', (t) => {
  t.plan(1);
  t.equal(
    unipath('.')('..', 'test', 'index.js'),
    path.resolve(path.join('.', '..', 'test', 'index.js')),
    'paths join/resolve properly');
});

test('unipath', (t) => {
  t.plan(1);
  t.equal(
    unipath()(),
    path.resolve(path.join('.', '.')),
    'handles default params');
});
