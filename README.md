# babel-plugin-webpack-prefetch

Babel plugin for adding webpackPrefetch comment. Requires babel 7.

[![license](https://img.shields.io/npm/l/babel-plugin-webpack-prefetch.svg)](https://github.com/whtsky/babel-plugin-webpack-prefetch/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/babel-plugin-webpack-prefetch.svg)](https://www.npmjs.com/package/babel-plugin-webpack-prefetch)
[![Build Status](https://travis-ci.org/whtsky/babel-plugin-webpack-prefetch.svg?branch=master)](https://travis-ci.org/whtsky/babel-plugin-webpack-prefetch)
[![codecov](https://codecov.io/gh/whtsky/babel-plugin-webpack-prefetch/branch/master/graph/badge.svg)](https://codecov.io/gh/whtsky/babel-plugin-webpack-prefetch)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## Usage

```bash
yarn add -D babel-plugin-webpack-chunkname
```

then add `babel-plugin-webpack-chunkname` to your `.babelrc.js`

```diff .babelrc.js
{
  "plugins": [
+    "babel-plugin-webpack-chunkname"
  ]
}
```

And it does :
```diff a.js
import ccc from 'ddd'
import 'aaa'

const a = import(
+ /* webpackPrefetch: true */
'aaa'
)
const b = import(
+ /* webpackPrefetch: true */
'bbb'
)
```
