# chunky-monkey
- **chunkyMonkey:** When given an array and a size it will return a new multi-dimensional array by grouping the original array elements in a specified size.

# Usage
|      Function Name 🤖      | Parameters ⚗           | Return type 🎁                                                         |
| :------------------------: | ---------------------- | ---------------------------------------------------------------------- |
|    chunkyMonkey   | arr, size               | A multi-dimensional array with the original elements grouped in arrays of the specified size  |


# Code snippets

## chunkyMonkey: 
```js 
console.log(chunkyMonkey([12, 34, 56, 78, 91], 2));
// [ [ 12, 34 ], [ 56, 78 ], [ 91 ] ]
```

```js 
console.log(chunkyMonkey([["Foo", "Bar", "Baz"], ["Qux", "Quux", "Quuz"], ["Corge", "Grault", "Garply"]], 2));

// [ [ [ 'Foo', 'Bar', 'Baz' ], [ 'Qux', 'Quux', 'Quuz' ] ],  [ [ Corge', 'Grault', 'Garply' ] ] ]
```