'use strict'

const { execSync } = require('child_process')

let key = process.env.KEY
let channel = process.env.CHANNEL || 'default'
let message = `🐳 - ${new Date().toUTCString()} ${process.env.MESSAGE}`

let timeout
if (process.env.TIMEOUT) {
  timeout = `--timeout ${process.env.TIMEOUT}`
}

if (process.env.DEBUG) {
  execSync(`npm info cabal -g`, { stdio: 'inherit' })
  execSync(`npm info multifeed -g`, { stdio: 'inherit' })
}

if (!key) {
  console.log('❗ ERROR: KEY not set in env')
  process.exit(1)
}

execSync(`cabal --key ${key} --channel ${channel} --message "${message}" ${timeout}`, { stdio: 'inherit' })

console.log(`
---------------
MESSAGE POSTED:
Key:     ${key}
Channel: ${channel}
Message: "${message}"
---------------
`)

process.exit(0)
