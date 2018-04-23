const { join } = require('path')
const { readdirSync, statSync, readFileSync } = require('fs')
const { transform } = require('@babel/core')

const FIXTURE_PATH = join(__dirname, 'fixtures')
const PLUGIN_FILE = join(__dirname, '../index.js')

const plugin = require(PLUGIN_FILE)

const testFolders = readdirSync(FIXTURE_PATH).filter(file =>
  statSync(join(FIXTURE_PATH, file)).isDirectory(),
)

function transformInput(input, config) {
  const result = transform(input, {
    plugins: [[plugin, config]],
  })
  return result.code
}

describe('babel-plugin-webpack-prefetch', () => {
  testFolders.forEach(folderName => {
    const config = require(join(FIXTURE_PATH, folderName, 'config.js'), 'utf8')
    const input = readFileSync(
      join(FIXTURE_PATH, folderName, 'input.js'),
      'utf8',
    )
    it(`${folderName} matches snapshot`, () => {
      const result = transformInput(input, config)
      expect(result.trim()).toMatchSnapshot(folderName)
    })
  })
})
