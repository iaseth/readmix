
# readmix

[`readmix`](https://www.npmjs.com/package/readmix) is a command-line `README` generator.

You can find the source code at [`iaseth/readmix`](https://github.com/iaseth/readmix).



## Installation
You can install [`readmix`](https://www.npmjs.com/package/readmix) with the following command:
```
npm i -g readmix
```

Now you should be able to run the `readmix` command in your terminal.



## Usage
To compile your `README.rx`:
```
readmix --compile --markdown README.rx
```

To compile all `rx` files in the current directory:
```
readmix --compile --markdown .
```

To compile your `README.rx` to `HTML`:
```
readmix --compile --html README.rx
```

To run a preview server for all `rx` files in the current directory:
```
readmix --preview .
```



## Features
* Allows you to write comments in your `markdown` files:

    First way to add comments:
    ```
    // This is a comment.
    ```

    Another way to add comments:
    ```
    :: This is another comment.
    ```

* Easily insert the contents of any file inside your `README`:

    This will insert the contents of your `LICENSE` file:
    ```
    {{ "LICENSE" | File }}
    ```

    This will insert the contents of `tsconfig.json` file into a code-block:
    ```
    {{ "tsconfig.json" | CodeFile }}
    ```

    Here, `File` and `CodeFile` are filters provided by `Readmix`.

* Easy access to `package.json` and `package-lock.json`:

    This will print the app version:
    ```
    {{ packageJson.version }}
    ```

    This will print the app name:
    ```
    {{ packageLockJson.name }}
    ```

    `packageJson` and `packageLockJson` are available in every `rx` file assuming the corresponding `JSON` files are present.



## Flags

The  `readmix` command accepts the following command line options:

| Short | Long | Description |
| --- | --- | --- |
| `-A` | `--api` | Run the Readmix JSON API. |
| `-C` | `--compile` | Compile to Markdown. |
| `-D` | `--debug` | Turns debug mode ON. |
| `-F` | `--force` | Force update files. |
| `-H` | `--html` | Compile to HTML. |
| `-I` | `--init` | Initialize readmix in directory, creates rxconfig.json with default options. |
| `-L` | `--list` | List all input files. |
| `-M` | `--markdown` | Compile to Markdown. |
| `-O` | `--open` | Open live preview in default web browser. |
| `-P` | `--preview` | Run a live preview server. |
| `-Q` | `--quiet` | Turns quiet mode ON. |
| `-R` | `--recursive` | Select subdirectories recursively. |
| `-S` | `--status` | Print status. |
| `-V` | `--version` | Print version. |
| `-W` | `--watch` | Watch input files for changes. |
| `-X` | `--experimental` | Turns experimental mode ON. |
| `-Z` | `--zen` | Turns zen mode ON. |



## Props

Every `rx` file has access to the global `Rx` object with the following properties:
| Prop | Value |
| --- | --- |
| `appName` | `Readmix` |
| `commands` | `Object [8]` |
| `filters` | `Object [13]` |
| `flags` | `Object [17]` |
| `helpers` | `Object [19]` |
| `mixins` | `Object [4]` |
| `sugars` | `Object [3]` |
| `utils` | `Object [1]` |
| `descriptions` | `Object [4]` |
| `packageJson` | `Object [14]` |
| `packageLockJson` | `Object [5]` |
| `tsconfigJson` | `Object [2]` |
| `rxconfigJson` | `Object [4]` |
| `gitconfig` | `Object [3]` |


Every `property` on the `Rx` object is also available globally.
So, you can just write `appName` instead of `Rx.appName`.



## Filters

In addition to default filters in `nunjucks`, `Readmix` provides you with these additional `filters`:
| Filter | Args |
| --- | --- |
| `Print` | 0 |
| `PrintPropsTable` | 0 |
| `PrintFunctionsTable` | 0 |
| `PrintFiltersTable` | 0 |
| `File` | 0 |
| `CodeFile` | 0 |
| `Table` | 0 |
| `CodeBlock` | 0 |
| `Indent` | 0 |
| `GithubLink` | 0 |
| `GithubRepoLink` | 0 |
| `NpmLink` | 0 |
| `NpmPackageLink` | 0 |

Each `filter` is available globally.


### Example usage
You can use the `File` filter to include the contents of your `LICENSE` file inside your `README`:

```
{{ "LICENSE" | File }}
```



## Mixins

In addition to props, the `Rx` object also contains a `mixins` object with the following `mixins`:
| Function | Args |
| --- | --- |
| `giveCredit()` | 0 |
| `dependencyTable()` | 0 |
| `devDependencyTable()` | 0 |
| `insertMitLicense()` | 1 |


Every `function` on the `Rx.mixins` object is also available globally.
So, you can just write `giveCredit()` instead of `Rx.mixins.giveCredit()` or `mixins.giveCredit()`.

### Example usage
You can use the `giveCredit()` mixin to include a section giving credit to `Readmix`:

```
{{ giveCredit() }}
```



## Dependencies
| Package | Version |
| --- | --- |
| `cors` | `^2.8.5` |
| `express` | `^4.18.2` |
| `ini` | `^4.1.0` |
| `js-yaml` | `^4.1.0` |
| `json5` | `^2.2.3` |
| `marked` | `^4.3.0` |
| `nunjucks` | `^3.2.4` |
| `toml` | `^3.0.0` |



## Dev dependencies
| Package | Version |
| --- | --- |
| `@types/cors` | `^2.8.13` |
| `@types/express` | `^4.17.17` |
| `@types/marked` | `^4.0.8` |
| `@types/node` | `^18.16.0` |
| `@types/nunjucks` | `^3.2.2` |
| `autoprefixer` | `^10.4.14` |
| `html-color-names` | `^0.3.2` |
| `jest` | `^29.5.0` |
| `postcss` | `^8.4.23` |
| `tailwindcss` | `^3.3.2` |



## License
MIT License

Copyright (c) Ankur Seth.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Credit

This file was generated using [`readmix`](https://github.com/iaseth/readmix).

