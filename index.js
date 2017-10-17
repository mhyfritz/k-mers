module.exports = function kMers (s, k) {
  var i = 0
  var n = s.length

  function next () {
    var ret = { value: undefined, index: i, done: true }
    if (i <= n - k) {
      ret.value = s.substr(i, k)
      ret.done = false
    }
    i += 1
    return ret
  }

  function all () {
    var ret = []
    for (var i = 0; i <= n - k; i += 1) {
      ret.push(s.substr(i, k))
    }
    return ret
  }

  function send (j) {
    i = j
    return next()
  }

  return {
    next: next,
    all: all,
    send: send
  }
}
