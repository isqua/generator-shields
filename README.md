generator-shields [![NPM version][npm-image]][npm-link]
=================

[![Dependency status][deps-image]][deps-link]
[![peerDependency status][peerdeps-image]][peerdeps-link]

> [Yeoman](http://yeoman.io) generator

Easily add shields to your README file. Available shields:

 * ![NPM version][npm-example] `--npm` current version in npm;
 * ![Build status][build-example] `--travis` current build status from [Travis CI](https://travis-ci.org/repositories);
 * ![Test coverage][coverage-example] `--coverage` test coverage from [Coveralls](https://coveralls.io);
 * ![Code climate][climate-example] `--climate` code climate rate from [Code Climate](https://codeclimate.com/);
 * ![Dependency status][deps-example] `--deps` dependencies from [David DM](https://david-dm.org/);
 * ![devDependency status][devdeps-example] `--devdeps` dev dependencies from [David DM](https://david-dm.org/);
 * ![peerDependency status][peerdeps-example] `--peerdeps` peer devdependencies from [David DM](https://david-dm.org/).

## Usage

```bash
npm install -g yo generator-shields
yo shields
```

## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-shields from npm, run:

```bash
npm install -g generator-shields
```

Finally, initiate the generator:

```bash
yo shields
```

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT

[npm-example]: https://isquariel.github.io/generator-shields/shields/npm.svg
[build-example]: https://isquariel.github.io/generator-shields/shields/build.svg
[coverage-example]: https://isquariel.github.io/generator-shields/shields/coverage.svg
[climate-example]: https://isquariel.github.io/generator-shields/shields/climate.svg
[deps-example]: https://isquariel.github.io/generator-shields/shields/deps.svg
[devdeps-example]: https://isquariel.github.io/generator-shields/shields/devdeps.svg
[peerdeps-example]: https://isquariel.github.io/generator-shields/shields/peerdeps.svg
[npm-image]: https://img.shields.io/npm/v/generator-shields.svg?style=flat
[npm-link]: https://npmjs.org/package/generator-shields
[deps-image]: https://img.shields.io/david/isquariel/generator-shields.svg?style=flat
[deps-link]: https://david-dm.org/isquariel/generator-shields
[peerdeps-image]: https://img.shields.io/david/peer/isquariel/generator-shields.svg?style=flat
[peerdeps-link]: https://david-dm.org/isquariel/generator-shields#info=peerDependencies
