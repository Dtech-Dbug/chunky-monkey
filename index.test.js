const chunkyMonkey = require("./index");

test("should array be split into equal multi-dim groups", () => {
  expect(chunkyMonkey([1, 2, 3, 4, 5, 6], 2)).toStrictEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
});

test("should assymetric array be split into equal multi-dim groups", () => {
  expect(chunkyMonkey([1, 2, 3, 4, 5, 6, 7], 2)).toStrictEqual([
    [1, 2],
    [3, 4],
    [5, 6],
    [7],
  ]);
});

test("should assymetric array be split into equal multi-dim groups", () => {
  expect(chunkyMonkey([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([
    [1, 2, 3],
    [4, 5, 6],
    [7],
  ]);
});

test("should array be unchanged if the param size is 0", () => {
  expect(chunkyMonkey([1, 2, 3, 4, 5, 6, 7], 0)).toStrictEqual([
    [1, 2, 3, 4, 5, 6, 7],
  ]);
});

test("should array be changed if arr len is < size", () => {
  expect(chunkyMonkey([1, 2], 3)).toStrictEqual([[1, 2]]);
});

test("should array be split nto smaller multi-dim array", () => {
  expect(chunkyMonkey([1, 2], 1)).toStrictEqual([[1], [2]]);
});
