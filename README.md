<h1 align="center">react-default-memo</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/react-default-memo"><img alt="npm" src="https://img.shields.io/npm/v/react-default-memo"></a>
  <a href="https://www.npmjs.com/package/react-default-memo"><img alt="npm (tag)" src="https://img.shields.io/npm/v/react-default-memo/alpha"></a>
  <a href="https://github.com/slikts/react-default-memo/actions?query=workflow%3ABuild"><img src="https://github.com/slikts/react-default-memo/workflows/Build/badge.svg" alt="Release"></a>
  <a href="https://coveralls.io/github/slikts/react-default-memo"><img src="https://img.shields.io/coveralls/slikts/react-default-memo.svg" alt="Coveralls"></a>
  <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release"></a>
  <img src="https://badgen.net/dependabot/slikts/react-default-memo" alt="Dependabot">
</p>

This is a proof of concept for "memoizing" React components by default and in a more comprehensive way than is possible either with React builtins like `memo()` or `useMemo()`, or with libraries like [use-deep-compare-effect] and [react-fast-compare].

**[Demo][demo]** (CodeSandbox).

## Installation

```sh
npm i react-default memo
```

```sh
yarn add react-default-memo
```

## Usage

Add at the top of a file:

```js
/** @jsx createValueElement */
import { createValueElement } from "react-default-memo";
```

This replaces the React builtin `createElement()` with a custom `createValueElement()` function using the `@babel/plugin-transform-react-jsx` plugin (included by default in tools like `create-react-app`).

## License

MIT

[use-deep-compare-effect]: https://github.com/kentcdodds/use-deep-compare-effect
[react-fast-compare]: https://github.com/FormidableLabs/react-fast-compare
[tuplerone]: https://github.com/slikts/tuplerone
[demo]: https://codesandbox.io/s/react-default-memo-demo-y3kp7
