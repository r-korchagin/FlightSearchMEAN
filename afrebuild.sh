#!/bin/bash

#rm -rf ./dist/static/js
#rm -rf ./dist/static/style
#rm -rf ./dist/static/img
#rm -rf /dist/static/fonts

mkdir ./dist/static/js
mkdir ./dist/static/style
mkdir ./dist/static/img
mkdir ./dist/static/fonts

mv ./dist/static/*.js  ./dist/static/js/
mv ./dist/static/*.gz  ./dist/static/js/
mv ./dist/static/*.css  ./dist/static/style/
mv ./dist/static/*.ico  ./dist/static/img/
mv ./dist/static/*.jpg  ./dist/static/img/
mv ./dist/static/*.ttf  ./dist/static/fonts/
mv ./dist/static/*.woff  ./dist/static/fonts/

sed -i 's/styles\./\/style\/styles./g' ./dist/static/index.html
sed -i 's/inline\./\/js\/inline./g' ./dist/static/index.html
sed -i 's/polyfills\./\/js\/polyfills./g' ./dist/static/index.html
sed -i 's/vendor\./\/js\/vendor./g' ./dist/static/index.html
sed -i 's/main\./\/js\/main./g' ./dist/static/index.html
