# next-blob2down
> Download from blob.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-blob2down
```

## usage
```js
import '@jswork/next-blob2down';

// download a png with filename
fetch('https://www.alo7.com/assest/images_cms/logo_title.png')
  .then(r=>r.blob())
  .then(res=>{
    nx.blob2down(res, { filename: 'logo.png' });
  });
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-blob2down/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-blob2down
[version-url]: https://npmjs.org/package/@jswork/next-blob2down

[license-image]: https://img.shields.io/npm/l/@jswork/next-blob2down
[license-url]: https://github.com/afeiship/next-blob2down/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-blob2down
[size-url]: https://github.com/afeiship/next-blob2down/blob/master/dist/next-blob2down.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-blob2down
[download-url]: https://www.npmjs.com/package/@jswork/next-blob2down
