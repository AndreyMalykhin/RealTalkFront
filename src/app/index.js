import 'angular-material/angular-material.css';
import ngMaterial from 'angular-material';
import ngMessages from 'angular-messages';
import angular from 'angular';
import core from '../core';
import playground from '../playground';
import appDirective from './app-directive';

export default angular.module('app', [ngMaterial, ngMessages, core, playground])
    .directive('rtApp', appDirective)
    .config(config)
    .name;

function config($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('purple')
        .warnPalette('red')
        .backgroundPalette('grey');
}

config.$inject = ['$mdThemingProvider'];
