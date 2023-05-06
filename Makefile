
default: build

build: ts

readme:
	@echo "Recompiling README ..."
	@./cli.js --compile --markdown README.md.rx
	@echo "    Done."

publish: build readme
	@echo "Publishing to NPM ..."
	@npm publish
	@echo "    Done."

ts: clean
	@echo "Compiling TS to JS ..."
	@tsc
	@echo "    Done."

css:
	npx tailwindcss -i ./src/css/readmix.css -o ./templates/static/css/readmix.css

watchcss:
	npx tailwindcss -i ./src/css/readmix.css -o ./templates/static/css/readmix.css --watch

docs:
	./cli.js --compile --html README.md.rx
	mv README.md.html docs/index.html
	cp -r templates/static docs

clean:
	@echo "Cleaning JS ..."
	@rm -rf dist
	@echo "    Done."

.PHONY: docs
