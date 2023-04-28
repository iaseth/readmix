
default: build

build:
	npm run build

publish: build
	netlify deploy --prod -d dist

clean:
	rm -rf dist
