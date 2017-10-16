# k-mers

Enumerate [k-mers](https://en.wikipedia.org/wiki/K-mer)
of a given string.

## Installation

```bash
npm install k-mers
```

## Example

```js
kMerIter = require('k-mers')

var s = 'foobar'
var k = 3

// get all 3-mers in one shot:
var kMers = kMerIter(s, k).all()
console.log(kMers)
// [ 'foo', 'oob', 'oba', 'bar' ]

// iterate over 3-mers:
kMers = kMerIter(s, k)
var kMer = kMers.next() // { value: 'foo', done: false }

for (var i = 0; !kMer.done; i += 1, kMer = kMers.next()) {
  console.log(k + '-mer at index', i, 'is', kMer.value)
}
// 3-mer at index 0 is foo
// 3-mer at index 1 is oob
// 3-mer at index 2 is oba
// 3-mer at index 3 is bar
```