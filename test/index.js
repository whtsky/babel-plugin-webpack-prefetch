const { join } = require('path')
const { readdirSync, statSync, readFileSync } = require('fs')
const { transform: transformBabel7 } = require('@babel/core')
const { transform: transformBabel6 } = require('babel-core')

const FIXTURE_PATH = join(__dirname, 'fixtures')
const PLUGIN_FILE = join(__dirname, '../index.js')

const plugin = require(PLUGIN_FILE)

const testFolders = readdirSync(FIXTURE_PATH).filter(file =>
  statSync(join(FIXTURE_PATH, file)).isDirectory(),
)

function transformInput(input, config, transform) {
  const result = transform(input, {
    plugins: [[plugin, config]],
  })
  return result.code
}

describe('babel-plugin-webpack-prefetch', () => {
  testFolders.forEach(folderName => {
    let config
    try {
      config = require(join(FIXTURE_PATH, folderName, 'config.js'))
    } catch (e) {
      // don't care
    }
    const input = readFileSync(
      join(FIXTURE_PATH, folderName, 'input.js'),
      'utf8',
    )
    it(`${folderName} matches snapshot for babel 7`, () => {
      const result = transformInput(input, config, transformBabel7)
      expect(result.trim()).toMatchSnapshot(folderName)
    })
    it(`${folderName} matches snapshot for babel 6`, () => {
      const result = transformInput(input, config, transformBabel6)
      expect(result.trim()).toMatchSnapshot(folderName)
    })
  })
})
