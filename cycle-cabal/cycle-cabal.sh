#!/bin/bash
if [ $# -eq 0 ]
then
    echo "Missing arg: directory path to cabal.chat website"
    exit
fi

WEBSITE="$1/index.html"
WELL_KNOWN="$1/.well-known/cabal"

# generate new cabal key
NEW_KEY="$(node index.js)"

# replace cabal key for website
cat $WEBSITE | sed "s/cabal:\/\/\([0-9a-fA-F]\{64\}\)/cabal:\/\/$NEW_KEY/" > tmp
mv tmp $WEBSITE

# replace cabal dns shortname
cat $WELL_KNOWN | sed "s/cabal:\/\/\([0-9a-fA-F]\{64\}\)/cabal:\/\/$NEW_KEY/" > tmp
mv tmp $WELL_KNOWN

# echo new key
echo $NEW_KEY