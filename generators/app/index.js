'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the magnificent ' + chalk.red('ADS Client Site') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'siteTitle',
      message: 'What’s this site called?',
      default: this.appname
    }, {
      type: 'input',
      name: 'siteDescription',
      message: 'And what’s it all about?'
    }, {
      type: 'input',
      name: 'siteURL',
      message: 'What’s this site’s URL?'
    }, {
      type: 'input',
      name: 'authorEmail',
      message: 'What’s the client’s email address?'
    }, {
      type: 'input',
      name: 'authorTwitterUsername',
      message: 'And their Twitter username?'
    }, {
      type: 'input',
      name: 'authorFacebookUsername',
      message: 'How about their Facebook username?'
    }, {
      type: 'input',
      name: 'timeZone',
      message: 'What time zone will this site operate in?',
      default: 'America/Chicago'
    }, {
      type: 'confirm',
      name: 'installDeps',
      message: 'Would you like me to install your project’s dependencies?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(this.templatePath('Gemfile'), 'Gemfile');
    this.fs.copy(this.templatePath('gulp'), 'gulp');
    this.fs.copy(this.templatePath('gulpfile.js'), 'gulpfile.js');
    this.fs.copy(this.templatePath('package.json'), 'package.json');
    this.fs.copy(this.templatePath('src'), 'src');
    this.fs.copyTpl(
      this.templatePath('_config.yml'),
      this.destinationPath('_config.yml'),
      this.props
    );
  },

  install: function () {
    if (this.props.installDeps) {
      this.spawnCommand('bundle', ['install']);
      this.npmInstall();
    }
  }
});
