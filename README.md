# babel-plugin-webpack-prefetch

Babel plugin for adding webpackPrefetch comment.

[![license](https://img.shields.io/npm/l/babel-plugin-webpack-prefetch.svg)](https://github.com/whtsky/babel-plugin-webpack-prefetch/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/babel-plugin-webpack-prefetch.svg)](https://www.npmjs.com/package/babel-plugin-webpack-prefetch)
[![Build Status](https://travis-ci.org/whtsky/babel-plugin-webpack-prefetch.svg?branch=master)](https://travis-ci.org/whtsky/babel-plugin-webpack-prefetch)
[![codecov](https://codecov.io/gh/whtsky/babel-plugin-webpack-prefetch/branch/master/graph/badge.svg)](https://codecov.io/gh/whtsky/babel-plugin-webpack-prefetch)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwhtsky%2Fbabel-plugin-webpack-prefetch.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwhtsky%2Fbabel-plugin-webpack-prefetch?ref=badge_shield)

## Usage

```bash
yarn add -D babel-plugin-webpack-prefetch
```

then add `babel-plugin-webpack-prefetch` to your `.babelrc`

```diff .babelrc
{
  "plugins": [
+    "babel-plugin-webpack-prefetch"
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

`babel-plugin-webpack-prefetch` will respect your comment :
```diff a.js
const a = import(
// you added webpackPrefetch: false so babel-plugin-webpack-prefetch will not modify it
/* webpackPrefetch: false */
'aaa'
)
const b = import(
+ /* webpackPrefetch: true */
'bbb'
)
```

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fwhtsky%2Fbabel-plugin-webpack-prefetch.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fwhtsky%2Fbabel-plugin-webpack-prefetch?ref=badge_large)
