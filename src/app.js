import 'angular-material/angular-material.css';
import ngMaterial from 'angular-material';
import angular from 'angular';
import playground from './playground';
import AppCtrl from './app-ctrl';

angular.module('app', [ngMaterial, playground])
    .controller('AppCtrl', AppCtrl)
    .config(['$mdThemingProvider', function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('purple')
            .warnPalette('red')
            .backgroundPalette('grey');
    }]);
