import 'angular-material/angular-material.css';
import ngMaterial from 'angular-material';
import angular from 'angular';
import core from '../core';
import playground from '../playground';
import appDirective from './app-directive';

export default angular.module('app', [ngMaterial, core, playground])
    .directive('rtApp', appDirective)
    .config(['$mdThemingProvider', function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('purple')
            .warnPalette('red')
            .backgroundPalette('grey');
    }])
    .name;
