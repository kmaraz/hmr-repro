#!/bin/sh
YELLOW='\033[1;33m'
NC='\033[0m'

clear
echo "1.Build with AOT"
echo "2.Run Dev Server"
echo "3.Check with ESLint"
echo "4.Build and link Schematics"
echo
echo "${YELLOW}Enter your choice:${NC} \c"
read choice

case ${choice} in
	1)
		export NODE_ENV=production
		node --max_old_space_size=12092 ./node_modules/webpack/bin/webpack.js --progress --colors --mode=production --analyze=true
	;;
	2)
		export NODE_ENV=development
		node --max_old_space_size=10092 ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --config webpack.config.dev.js --progress --colors --mode=development
	;;
	3)
		npx eslint --fix --ext ts --cache --cache-location node_modules/.cache/.eslintcache ./app
	;;
	4)
		tsc -p ./app/submodules/slido-schematics/tsconfig.json
    npm link ./app/submodules/slido-schematics
	;;
	* )
    echo "Ivalid option"
  ;;
esac
