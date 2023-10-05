install:
	npm i

start-dev:
	npx nodemon src/main.js

start-prod:
	node src/main.js

run-eslint:
	npx eslint src
