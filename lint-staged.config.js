module.exports = {
  linters: {
    '**/*.{js,json}': ['prettier --write', 'git add'],
  },
  concurrent: false,
}
