
# readmix

[`readmix`](https://www.npmjs.com/package/readmix) is a command-line `README` generator.

You can find the source code at [`iaseth/readmix`](https://github.com/iaseth/readmix).



## Features
* Allows you to write comments in your `markdown` files:

    * First way to add comments:
        ```
        // This is a comment.
        ```

    * Another way to add comments:
        ```
        :: This is another comment.
        ```

* Easily insert the contents of any file inside your `README`:

    * This will insert the comments of your `LICENSE` file:
        ```
        {{ "LICENSE" | File }}
        ```

    * This will insert the contents of `tsconfig.json` file into a code-block:
        ```
        {{ "tsconfig.json" | CodeFile | safe }}
        ```

    * Here, `File` and `CodeFile` are filters provided by `Readmix`, while `safe` is a `nunjucks` filter that marks the input as safe and disables `escaping`.

* Easy access to `package.json` and `package-lock.json`:

    * This will print the app version:
        ```
        {{ packageJson.version }}
        ```

    * This will print the app name:
        ```
        {{ packageLockJson.name }}
        ```

    * `packageJson` and `packageLockJson` are available in every `rx` file assuming the corresponding `JSON` files are present.



## Props

Every `rx` file has access to the global `Rx` object with the following properties:
| Prop | Value |
| --- | --- |
| `appName` | `Readmix` |
| `filters` | `Object [11]` |
| `mixins` | `Object [4]` |
| `descriptions` | `Object [4]` |
| `packageJson` | `Object [14]` |
| `packageLockJson` | `Object [5]` |


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
| `CodeBlock` | 0 |
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
| `parse()` | 1 |
| `dependencyTable()` | 0 |
| `devDependencyTable()` | 0 |


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
| `nunjucks` | `^3.2.4` |



## Dev dependencies
| Package | Version |
| --- | --- |
| `@types/node` | `^18.16.0` |
| `@types/nunjucks` | `^3.2.2` |



## License
MIT License

Copyright (c) Ankur Seth.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


## Credit

This file was generated using [`readmix`](https://github.com/iaseth/readmix).

