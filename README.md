# unipath

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![Downloads][download-badge]][npm-url]

> An idiomatic file joining utility

## Install

```sh
npm i -D unipath
```

## Usage

```js
import unipath from "unipath"

// create a path.join "partial"
const dist = unipath('dist')

// join paths to base paths
const entry = dist('scripts', 'app', 'index.js')

// entry would be './dist/scripts/app/index.js'
```

## License

MIT © [Manu Phatak](https://manuphatak.com)

[npm-url]: https://npmjs.org/package/unipath
[npm-image]: https://img.shields.io/npm/v/unipath.svg?style=flat-square

[travis-url]: https://travis-ci.org/bionikspoon/unipath
[travis-image]: https://img.shields.io/travis/bionikspoon/unipath.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/bionikspoon/unipath
[coveralls-image]: https://img.shields.io/coveralls/bionikspoon/unipath.svg?style=flat-square

[depstat-url]: https://david-dm.org/bionikspoon/unipath
[depstat-image]: https://david-dm.org/bionikspoon/unipath.svg?style=flat-square

[download-badge]: http://img.shields.io/npm/dm/unipath.svg?style=flat-square
