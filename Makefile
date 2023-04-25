
default: build

build: clean
	tsc

clean:
	rm -rf dist
