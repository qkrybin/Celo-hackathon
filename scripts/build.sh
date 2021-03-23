#!/usr/bin/env bash
set -euo pipefail

# Builds the app, outputting files ready for Netlify
# Flags:
# -n: Name of the network: 'Alfajores' or 'Mainnet'

NETWORK="Alfajores"
ELECTRON=false

while getopts 'n:e' flag; do
  case "${flag}" in
    n) NETWORK="$OPTARG" ;;
    e) ELECTRON=true ;;
    *) echo "Unexpected option ${flag}" ;;
  esac
done

[ -z "$NETWORK" ] && echo "Need to set the NETWORK via the -n flag" && exit 1;

xplat_sed () {
  sed -i'.bak' -e "$1" -- "$2"
  rm -- "${2}.bak"
}

echo "Cleaning first"
yarn run clean

echo "Building app for ${NETWORK}"

# Ensure right network config 
xplat_sed "s/freeze(config.*)/freeze(config${NETWORK})/g" src/config.ts

export NODE_ENV=production 
if [ "$ELECTRON" = true ]; then
  export BUILD_TARGET=electron
fi
yarn run webpack --mode production

echo "Checking bundle integrity"
export BUNDLE_HASH=`shasum -b -a 256 dist/bundle.js | awk '{ print $1 }' | xxd -r -p | base64`
echo "Bundle hash ${BUNDLE_HASH}"
export LEDGER_BUNDLE_HASH=`shasum -b -a 256 dist/bundle-ledger.js | awk '{ print $1 }' | xxd -r -p | base64`
echo "Ledger bundle hash ${LEDGER_BUNDLE_HASH}"

echo "Updating index.html"
xplat_sed "s|sha256-%BUNDLE_HASH%|sha256-${BUNDLE_HASH}|g" dist/index.html

if [ "$ELECTRON" = false ]; then
  echo "Removing CSP header in index.html" # It gets set via netlify header instead which is preferable
  xplat_sed "s|<meta http-equiv.*>||g" dist/index.html 

  echo "Updating Readme"
  xplat_sed "s|bundle.js -> sha256-.*\`|bundle.js -> sha256-${BUNDLE_HASH}\`|g" README.md
  xplat_sed "s|bundle-ledger.js -> sha256-.*\`|bundle-ledger.js -> sha256-${LEDGER_BUNDLE_HASH}\`|g" README.md
else
  xplat_sed "s/ | Use Celo on the web or on your desktop//g" dist/index.html 
fi

echo "Done building app for ${NETWORK}"