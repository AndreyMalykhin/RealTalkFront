import 'angular-material/angular-material.css';
import ngMaterial from 'angular-material';
import angular from 'angular';
import playground from './playground';

angular.module('app', [ngMaterial, playground])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('purple')
            .warnPalette('red')
            .backgroundPalette('grey');
    });
