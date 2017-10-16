module.exports = function kMers (s, k) {
  var i = 0
  var n = s.length
  return {
    next: function () {
      var ret = { value: undefined, done: true }
      if (i <= n - k) {
        ret.value = s.substr(i, k)
        ret.done = false
      }
      i += 1
      return ret
    }
  }
}
