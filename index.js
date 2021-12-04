function chunkyMonkey(arr, size) {
  if (arr.length <= size) return [arr];
  else {
    return [arr.slice(0, size)].concat(chunkyMonkey(arr.slice(size), size));
  }
}

console.log(chunkyMonkey([1, 2, 3, 4, 5, 6, 7], 3));
