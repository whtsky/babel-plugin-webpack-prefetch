const dynamicImportPlugin = require('@babel/plugin-syntax-dynamic-import')
  .default

function hasPrefetchComment(node) {
  const { leadingComments } = node
  return (leadingComments || []).some(comment =>
    comment.value.includes('webpackPrefetch'),
  )
}

module.exports = () => ({
  inherits: dynamicImportPlugin,
  visitor: {
    CallExpression(path) {
      if (path.node.callee.type === 'Import') {
        const args = path.get('arguments')
        if (!args) {
          return
        }
        if (hasPrefetchComment(args[0].node)) return
        args[0].addComment('leading', ' webpackPrefetch: true ')
      }
    },
  },
})
