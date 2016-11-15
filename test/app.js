'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ccp-client-site:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({siteTitle: 'Example Site', installDeps: false})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '_config.yml',
      'Gemfile',
      'gulp',
      'gulpfile.js',
      'package.json',
      'src'
    ]);
  });

  it('fills in user-provided info', function () {
    assert.fileContent('_config.yml', /title: Example Site/);
  });
});
