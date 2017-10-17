# k-mers

Enumerate [k-mers](https://en.wikipedia.org/wiki/K-mer)
of a given string.

## Installation

```bash
npm install k-mers
```

## Example

```js
var kMerIter = require('.')

var s = 'foobar'
var k = 3

// get all 3-mers in one shot:
var kMers = kMerIter(s, k).all()
console.log(kMers)
// [ 'foo', 'oob', 'oba', 'bar' ]

// iterate over 3-mers:
kMers = kMerIter(s, k)
var kMer = kMers.next()

while (!kMer.done) {
  console.log(kMer)
  kMer = kMers.next()
}
// { value: 'foo', index: 0, done: false }
// { value: 'oob', index: 1, done: false }
// { value: 'oba', index: 2, done: false }
// { value: 'bar', index: 3, done: false }

kMer = kMers.send(2)
console.log(kMer)
// { value: 'oba', index: 2, done: false }
kMer = kMers.next()
console.log(kMer)
// { value: 'bar', index: 3, done: false }
```
