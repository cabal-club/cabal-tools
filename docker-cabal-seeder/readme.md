## cabal seeder _in docker!_

### Versions found in this:
cabal 5.0.0
multifeed 2.0.3

### Usage:
```
docker run --init --rm \
-e KEY=bd45fde0ad866d4069af490f0ca9b07110808307872d4b659a4ff7a4ef85315a \
-e NICK='seeder name' \
cabalclub/cabal-seeder
```

Show Cabal version info:
`-e DEBUG=true`
