function hasPrefetchComment(node) {
  const { leadingComments } = node
  return (leadingComments || []).some(comment =>
    comment.value.includes('webpackPrefetch'),
  )
}

module.exports = ({ version }) => {
  const babelVersion = Number(version.split('.')[0])
  let dynamicImportPlugin
  if (babelVersion >= 7) {
    dynamicImportPlugin = require('@babel/plugin-syntax-dynamic-import').default
  } else {
    dynamicImportPlugin = require('babel-plugin-syntax-dynamic-import')
  }
  return {
    inherits: dynamicImportPlugin,
    visitor: {
      CallExpression(path) {
        if (path.node.callee.type === 'Import') {
          const args = path.get('arguments')
          if (hasPrefetchComment(args[0].node)) return
          args[0].addComment('leading', ' webpackPrefetch: true ')
        }
      },
    },
  }
}
