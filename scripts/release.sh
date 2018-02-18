#!/usr/bin/env bash
set -ex

CURRENT=`pwd`

# Release tagged code to GitHub Releases

#GITHUB_RELEASE_FILE="gap-$TRAVIS_TAG.tgz"

#tar -czf $GITHUB_RELEASE_FILE gap/

# Define variables.
#GH_REPO="https://api.github.com/repos/mcmartins/francy"
#GH_RELEASE="$GH_REPO/releases"
#GH_RELEASE_BODY="{\"tag_name\": \"$TRAVIS_TAG\", \"target_commitish\": \"master\", \"name\": \"$TRAVIS_TAG\", \"body\": \"New Francy Release\", \"draft\": false, \"prerelease\": false}"
#AUTH="Authorization: token $GITHUB_API_KEY"
#JSON="Content-Type: application/json"
#STREAM="Content-Type: application/octet-stream"

# Validate token.
#echo curl -o /dev/null -sH "$AUTH" $GH_REPO || { echo "Error: Invalid repo, token or network issue!";  exit 1; }

# Read asset tags.
#response=$(curl -H "$AUTH" -H "$JSON" -X POST -d "$GH_RELEASE_BODY" $GH_RELEASE)

# Get ID of the asset based on given filename.
#eval $(echo "$response" | grep -m 1 "id.:" | grep -w id | tr : = | tr -cd '[[:alnum:]]=')
#[ "$id" ] || { echo "Error: Failed to get release id for tag: $tag"; echo "$response" | awk 'length($0)<100' >&2; exit 1; }

# Construct url
#GH_ASSET="https://uploads.github.com/repos/mcmartins/francy/releases/$id/assets?name=$GITHUB_RELEASE_FILE"

#curl --data-binary @"$GITHUB_RELEASE_FILE" -H "$AUTH" -H "$STREAM" $GH_ASSET

# Release Jupyter Extension to PyPi

ls -lrt

cd js/extensions/jupyter_francy

pyenv local 3.6

pip3.6 install wheel
pip3.6 install twine

python3.6 setup.py sdist
python3.6 setup.py bdist_wheel --universal

`pyenv which twine` upload dist/*
