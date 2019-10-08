#!/bin/bash
if [ $# -eq 0 ]
then
    echo "Missing arg: directory path to cabal.chat website"
    exit
fi

WEBSITE="$1/index.html"
WELL_KNOWN="$1/.well-known/cabal"
# get directory of script to use with node invocation below
DIRECTORY=$(dirname -- $(readlink -fn -- "$0"))
# generate new cabal key
NEW_KEY="$(node $DIRECTORY/index.js)"

# replace cabal key for website
cat $WEBSITE | sed -i "s/cabal:\/\/\([0-9a-fA-F]\{64\}\)/cabal:\/\/$NEW_KEY/" $WEBSITE

# replace cabal dns shortname
cat $WELL_KNOWN | sed -i "s/cabal:\/\/\([0-9a-fA-F]\{64\}\)/cabal:\/\/$NEW_KEY/" $WELL_KNOWN

# commit & push to cabal-club repo
(cd $1 && git commit -am "add new cabal key" && git push)

# echo new key
echo $NEW_KEY
