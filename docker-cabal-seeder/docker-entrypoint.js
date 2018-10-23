'use strict'

const { execSync } = require('child_process')

let key = process.env.KEY
let nick = process.env.NICK && `--nick "${process.env.NICK}"`
let channel = process.env.CHANNEL || 'default'

if (process.env.DEBUG) {
  execSync(`npm info cabal -g`, { stdio: 'inherit' })
  execSync(`npm info multifeed -g`, { stdio: 'inherit' })
}

if (!key) {
  console.log('❗ ERROR: KEY not set in env')
  process.exit(1)
}

console.log(`🌱 Starting seeder at ${key}...`)

// Announce starting of seeder
execSync(`cabal --key ${key} --channel ${channel} --message "* Now seeding..." ${nick}`, { stdio: 'inherit' })

// Start seeder
execSync(`cabal --key ${key} ${nick} --seed`, { stdio: 'inherit' })

console.log(`🍓 Seeder stopped.`)

process.exit(0)
