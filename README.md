# Formula Functionizer [![formula-functionizer](https://img.shields.io/npm/v/formula-functionizer.svg)](https://www.npmjs.com/package/formula-functionizer)

A library for parsing formulas and create reusable functions in javascript and typescript.

Formula functionizer alows to interpret formulas (and in particular excel formulas) in a javascript way, in particular by using variables instead of cells references.

In addition, it creates reusable functions. It only parses the formula once when the function is created, allowing to apply the same formula for several variables values. That can be really useful when dealing with large arrays or generating function plots.

## Getting started

```
npm install --save formula-functionizer
```

```typescript
import { Parser } from 'formula-functionizer';

// Create a parser
const parser = new Parser();

// Parse a formula to create a function
const fn = parser.parse('x^2 + 10 - y');

// Use your function !
console.log(fn({ x: 4, y: 5 })); // 21
```

## Parser features

- Operators (can behave like js or excel operators, see below)
  - Arithmetic operators `+`, `-`, `*`, `/` and `^`
  - Comparison operators `>`, `>=`, `<`, `<=`, `=` and `<>`
- Custom functions `MYFUNCTION(4,5)`
  - Can support all **excel** functions using formula.js (see below)
- Arrays `[1, 3, MYFUNCTION(4,5)]`
- Arbitrary variables like `myVariable`, you need to pass their value when executing the function

## Options

Options can be passed when creating a parser using the `Parser` constructor.

```typescript
const parser = new Parser({
  operators: 'excel',
  functions: {
    DOUBLE: (x) => x * 2,
  },
});
```

The provided options are merged with the default options, you can specify only the options that matter to you.

### `operators` option

- Possible values : `excel`, `javascript`.
- Default value: `excel`
- Describes how the operators (arithmetic and comparison) should be handled.
  - `excel` : Operators give the same result as in excel. For example, the `+` operator tries to coerce values as numbers. `1 + '1'` returns `2`, `1 + '1A'` returns the `#!VALUE` error and `1/0` returns the `#!DIV0` error.
  - `javascript` : Operators give the same result as when used in javascript. For example, `1 + '1'` returns `'11'`, `1/0` returns `Infinity` and `0^0` returns `NaN`.

### `functions` option

- An object with keys as function names and functions as values.
- Default value: `{}`
- These functions can be used in your formulas. You can use this option to define your own functions or import excel formulas from formulajs. (see below)
- If you try calling a function that is not defined in your formula, the `#?NAME` will be returned.

## Use excel formulas

You can use excel formulas using the formulajs library. To do this, start by installing the formulajs package.

`npm install --save @formulajs/formulajs`

```typescript
import * as formulajs from '@formulajs/formulajs';

const parser = new Parser({
  functions: formulajs,
});

const fn = parser.parse('IF(SUM(x, y) > 10, "big", "small")');

console.log(fn({ x: 4, y: 5 })); // small
```

You can add your own functions to the formulajs functions this way :

```typescript
import * as formulajs from '@formulajs/formulajs';

const parser = new Parser({
  functions: {
    ...formulajs,
    DOUBLE: (x) => x * 2,
  },
});

const fn = parser.parse('DOUBLE(SUM(x, y))');

console.log(fn({ x: 4, y: 5 })); // 18
```

## References

This package is heavily inspired by [handsontable/formula-parser](https://github.com/handsontable/formula-parser)
