/* global test expect */

const kmers = require('.')

test('3-mers of "foobar" via `all`', () => {
  const mers = kmers(3, 'foobar').all()
  expect(mers).toMatchSnapshot()
})

test('3-mers of "foobar" via `next`', () => {
  const mers = []
  const kmersIter = kmers(3, 'foobar')
  while (true) {
    const kmer = kmersIter.next()
    if (kmer.value === undefined) {
      break
    }
    mers.push(kmer)
  }
  expect(mers).toMatchSnapshot()
})

test('2nd and 3rd 3-mer of "foobar" via `seek`', () => {
  const kmersIter = kmers(3, 'foobar')
  const mers = []
  kmersIter.seek(1)
  mers.push(kmersIter.next())
  mers.push(kmersIter.next())
  expect(mers).toMatchSnapshot()
})

test('1-mers of "foobar" via `all`', () => {
  const mers = kmers(1, 'foobar').all()
  expect(mers).toMatchSnapshot()
})

test('6-mers of "foobar" via `all`', () => {
  const mers = kmers(6, 'foobar').all()
  expect(mers).toMatchSnapshot()
})
