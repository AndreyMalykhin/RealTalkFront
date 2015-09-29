import 'angular-material/angular-material.css';
import ngMaterial from 'angular-material';
import angular from 'angular';

angular.module('app', [ngMaterial])
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('purple')
            .warnPalette('red')
            .backgroundPalette('grey');
    });
