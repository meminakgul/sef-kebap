/**
 * zip-project.js
 * Creates sef-kebap.zip from the entire project folder.
 * Usage: node zip-project.js
 * Requires: npm install archiver
 */

const archiver = require('archiver')
const fs = require('fs')
const path = require('path')

const OUTPUT_FILE = 'sef-kebap.zip'
const SOURCE_DIR = __dirname // current directory (project root)

// Files/folders to exclude from the zip
const EXCLUDED = ['node_modules', '.git', 'dist', OUTPUT_FILE]

const output = fs.createWriteStream(path.join(__dirname, OUTPUT_FILE))
const archive = archiver('zip', { zlib: { level: 9 } })

output.on('close', () => {
  const bytes = archive.pointer()
  const kb = (bytes / 1024).toFixed(1)
  console.log(`\n✅ sef-kebap.zip created successfully!`)
  console.log(`📦 Total size: ${kb} KB (${bytes} bytes)`)
  console.log(`📁 Output: ${path.join(__dirname, OUTPUT_FILE)}\n`)
})

archive.on('warning', (err) => {
  if (err.code === 'ENOENT') {
    console.warn('⚠️  Warning:', err.message)
  } else {
    throw err
  }
})

archive.on('error', (err) => {
  console.error('❌ Error creating zip:', err.message)
  throw err
})

archive.pipe(output)

// Add entire project directory, excluding node_modules, .git, dist, and the zip itself
archive.glob('**/*', {
  cwd: SOURCE_DIR,
  ignore: EXCLUDED.map(e => `${e}/**`).concat(EXCLUDED),
  dot: true, // include dotfiles like .gitignore
})

console.log(`\n🔄 Creating ${OUTPUT_FILE}...`)
console.log(`📂 Source: ${SOURCE_DIR}`)
console.log(`🚫 Excluding: ${EXCLUDED.join(', ')}\n`)

archive.finalize()
