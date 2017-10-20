module.exports = function kmers (k, s) {
  var i = 0
  var n = s.length

  function next () {
    return {
      value: i <= n - k ? s.substr(i, k) : undefined,
      index: i++
    }
  }

  function all () {
    var ret = []
    for (var i = 0; i <= n - k; i += 1) {
      ret.push(s.substr(i, k))
    }
    return ret
  }

  function seek (j) {
    i = j
  }

  return {
    next: next,
    all: all,
    seek: seek
  }
}
