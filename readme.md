# k-mers

Enumerate [k-mers](https://en.wikipedia.org/wiki/K-mer)
of a given string.

## Installation

```bash
npm install k-mers
```

## Usage

```js
var kmers = require('k-mers')

var s = 'foobar'
var k = 3

// get list of 3-mers in one shot:
kmers(k, s).all() // [ 'foo', 'oob', 'oba', 'bar' ]

// iterate over 3-mers:
iterKmers = kmers(k, s)
while (true) {
  var kmer = iterKmers.next()
  if (kmer.value === undefined) {
    break
  }
  console.log(kmer)
}
// { value: 'foo', index: 0 }
// { value: 'oob', index: 1 }
// { value: 'oba', index: 2 }
// { value: 'bar', index: 3 }

// (re)set iterator to given index
iterKmers.seek(2)
iterKmers.next() // { value: 'oba', index: 2 }
```
