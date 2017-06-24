var angular  = require('angular'),
    ngRoute  = require('angular-route');

var ngModule = angular.module('app', ['ngRoute']);

require('./style/main.css');
require('angular-i18n/angular-locale_ru-ru');

require('./constant')(ngModule);
require('./config')(ngModule);
require('./controllers')(ngModule);
require('./directives')(ngModule);
require('./services')(ngModule);
