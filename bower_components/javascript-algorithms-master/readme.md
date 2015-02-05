![](https://travis-ci.org/mgechev/javascript-algorithms.svg?branch=master)

## About

This repository contains JavaScript implementations of different famous Computer Science algorithms.

API reference with usage examples available <a href="https://mgechev.github.io/javascript-algorithms/" target="_blank">here</a>.

*Note: not all algorithms are well tested so bugs are quite possible.*

## Development

**To install all dev dependencies**

Call:

```bash
npm install
```

**To setup repository with documentation**

- Go to the parent directory of the `javascript-algorithms` folder and call:

```bash
git clone git@github.com:mgechev/javascript-algorithms.git javascript-algorithms-docs
```

- Go to the `javascript-algorithms-docs` folder and change current branch to `gh-pages`:

```bash
git checkout gh-pages
```

Now you can see `index.html` file in this folder and open it in your browser. 

**To update .html files with documentation**

Go to the `javascript-algorithms` folder and call:

```bash
gulp jsdoc 
```

and all files in `javascript-algorithms-docs` folder will be updated.

**To run tests**

Call:

```bash
gulp test
```

and all `*.spec.js` files will be executed.

## Contributions

Fork the repo and make requred changes. After that push your changes in branch, which is named according to the changes you did.
Initiate the PR.

Make sure you're editor makes validations according to the `.jshintrc` in the root directory of the repository.

Before pushing to the repository run:

```bash
gulp build
```

If the build is not successful fix your code in order the tests and jshint validation to run successfully and after that create a pull request.

## Contributors

[<img alt="mgechev" src="https://avatars.githubusercontent.com/u/455023?v=3&s=117" width="117">](https://github.com/mgechev) |[<img alt="AndreyGeonya" src="https://avatars.githubusercontent.com/u/773648?v=3&s=117" width="117">](https://github.com/AndreyGeonya) |[<img alt="pvoznenko" src="https://avatars.githubusercontent.com/u/1098414?v=3&s=117" width="117">](https://github.com/pvoznenko) |[<img alt="secrettriangle" src="https://avatars.githubusercontent.com/u/1765130?v=3&s=117" width="117">](https://github.com/secrettriangle) |[<img alt="Microfed" src="https://avatars.githubusercontent.com/u/613179?v=3&s=117" width="117">](https://github.com/Microfed) |[<img alt="contra" src="https://avatars.githubusercontent.com/u/425716?v=3&s=117" width="117">](https://github.com/contra) |
:---: |:---: |:---: |:---: |:---: |:---: |
[mgechev](https://github.com/mgechev) |[AndreyGeonya](https://github.com/AndreyGeonya) |[pvoznenko](https://github.com/pvoznenko) |[secrettriangle](https://github.com/secrettriangle) |[Microfed](https://github.com/Microfed) |[contra](https://github.com/contra) |

## License

The code in this repository is distributed under the terms of the MIT license.