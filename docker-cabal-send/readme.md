## cabal send _in docker!_

Sends a single message to a cabal then quit after timeout.

### Versions found in this:
cabal 5.0.0
multifeed 2.0.3

### Usage:
```
docker run --rm \                           
-e KEY=bd45fde0ad866d4069af490f0ca9b07110808307872d4b659a4ff7a4ef85315a \
-e MESSAGE='message to send' \
-e CHANNEL=default \
-e TIMEOUT=4000 \
cabalclub/cabal-send
```

Show Cabal version info:
`-e DEBUG=true`
