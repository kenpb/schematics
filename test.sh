app="bombo"
npm run build
pushd ../test
rm -rf $app
ng new $app -c @kenpb/schematics --material
