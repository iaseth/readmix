
default: build css

readme:
	@echo "Recompiling README ..."
	@./cli.js README.rx
	@echo "    Done."

publish: build css readme
	@echo "Publishing to NPM ..."
	@npm publish
	@echo "    Done."

build: clean
	@echo "Compiling TS to JS ..."
	@tsc
	@echo "    Done."

css:
	npx tailwindcss -i ./src/css/readmix.css -o ./templates/static/css/readmix.css

watchcss:
	npx tailwindcss -i ./src/css/readmix.css -o ./templates/static/css/readmix.css --watch

clean:
	@echo "Cleaning JS ..."
	@rm -rf dist
	@echo "    Done."
