module.exports = {
  linters: {
    '**/*.{js,json}': ['yarn prettier --write', 'git add'],
  },
  concurrent: false,
}
