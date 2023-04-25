
default: build

readme:
	@echo "Recompiling README ..."
	@./cli.js README.rx
	@echo "    Done."

publish: build readme
	@echo "Publishing to NPM ..."
	@npm publish
	@echo "    Done."

build: clean
	@echo "Compiling TS to JS ..."
	@tsc
	@echo "    Done."

clean:
	@echo "Cleaning JS ..."
	@rm -rf dist
	@echo "    Done."
