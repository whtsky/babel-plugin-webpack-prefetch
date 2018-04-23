# babel-plugin-webpack-prefetch

Babel plugin for adding webpackPrefetch comment. Requires babel 7.

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
