
# readmix

[`readmix`](https://www.npmjs.com/package/readmix) is a command-line `README` generator.

You can find the source code at [`iaseth/readmix`](https://github.com/iaseth/readmix).


## Props

Every `rx` file has access to the global `Rx` object with the following properties:
| Prop | Value |
| --- | --- |
| `appName` | `Readmix` |
| `filters` | `[object Object]` |
| `utils` | `[object Object]` |
| `packageJson` | `[object Object]` |
| `packageLockJson` | `[object Object]` |


Every `property` on the `Rx` object is also available globally.
So, you can just write `appName` instead of `Rx.appName`.


## Utility Functions

In addition to properties, the `Rx` object also contains the following utility `functions`:
| Function | Args |
| --- | --- |
| `giveCredit()` | 0 |
| `parse()` | 1 |


Every `function` on the `Rx` object is also available globally.
So, you can just write `giveCredit()` instead of `Rx.giveCredit()`.


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
| `GithubLink` | 0 |
| `GithubRepoLink` | 0 |
| `NpmLink` | 0 |
| `NpmPackageLink` | 0 |



## Dependencies
| Prop | Value |
| --- | --- |
| `nunjucks` | `^3.2.4` |


## Dev dependencies
| Prop | Value |
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

