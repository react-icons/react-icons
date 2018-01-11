all: dist/index.js

dist:
	mkdir -p dist

dist/index.js: dist src/index.js package.json
	./node_modules/.bin/babel src -d dist

clean:
	rm -rf dist
