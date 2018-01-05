#! /usr/bin/env bash
set -e

tag=$(git describe --tags)
npm pack
tar xf font-logos*.tgz
mv package font-logos-$tag
zip -r font-logos-$tag.zip font-logos-$tag
rm -r font-logos-$tag
rm font-logos*.tgz
