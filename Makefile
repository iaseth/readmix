
default: build

publish: build
	npm publish

build: clean
	tsc

clean:
	rm -rf dist
