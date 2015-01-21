'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var Shields = require('./shields');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    var pkg = this.fs.readJSON('package.json');

    this.npmName = pkg.name;

    this._shields = new Shields();

    this._defaults = {
      npmName: pkg.name,
      repoOwner: 'someuser',
      repoName: this.appname,
      npm: ! pkg.private,
      travis: this.fs.exists('.travis.yml'),
      coverage: false,
      climate: false,
      deps: this._hasDeps(pkg, 'dependencies'),
      devdeps: this._hasDeps(pkg, 'devDependencies'),
      peerdeps: this._hasDeps(pkg, 'peerDependencies')
    };
  },

  prompting: function () {
    var done = this.async();
    var defaults = this._defaults;
    var confirms = this._shields.getItems();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('Shields') + ' generator!'
    ));

    var prompts = [
      {
        name: 'repoOwner',
        message: 'Repository owner:',
        default: this._defaults.repoOwner
      },
      {
        name: 'repoName',
        message: 'Repository name:',
        default: this._defaults.repoName
      },
      {
        name: 'readme',
        message: 'Readme file:',
        default: 'README.md'
      }
    ];

    prompts = prompts.concat(
      confirms.map(function(item) {
        return {
          type: 'confirm',
          name: item,
          message: this._shields.getShieldMessage(item),
          default: defaults[item]
        };
      }.bind(this))
    );

    this.prompt(prompts, function (props) {
      this.repo = props.repoOwner + '/' + props.repoName;
      this.readme = props.readme;

      confirms.forEach(function(item) {
        this[item] = props[item];
      }.bind(this));

      done();
    }.bind(this));
  },

  collectShields: function() {
    this._shields.use(
      this._shields.getItems().filter(function(shield) {
        return Boolean(this[shield]);
      }.bind(this)),
      this
    );
  },

  writing: {
    readme: function() {
      var README = this.fs.read(this.readme);
      var afterHead = 2;

      README = README.split(/\r?\n/m);

      if (/^#/.test(README[0])) {
          afterHead = 1;
      }

      if (README[README.length - 1] === '') {
          README.pop();
      }

      README.splice.apply(README, [ afterHead, 0 ].concat(this._shields.getText()));

      README = README.concat(this._shields.getAliases()).concat('');

      this.fs.write(this.readme, README.join('\n'))
    }
  },

  _hasDeps: function(pkg, depsField) {
    return Boolean(pkg[depsField] && Object.keys(pkg[depsField]).length);
  },

});
