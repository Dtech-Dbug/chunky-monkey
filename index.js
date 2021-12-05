function chunkyMonkey(arr, size) {
  if (arr.length <= size || size <= 0) return [arr];
  else {
    return [arr.slice(0, size)].concat(chunkyMonkey(arr.slice(size), size));
  }
}

module.exports = chunkyMonkey;
