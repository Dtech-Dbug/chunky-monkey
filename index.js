function chunkyMonkey(arr, size) {
  if (arr.length <= size) return [arr];
  else {
    return [arr.slice(0, size)].concat(chunkyMonkey(arr.slice(size), size));
  }
}

module.exports = chunkyMonkey;
