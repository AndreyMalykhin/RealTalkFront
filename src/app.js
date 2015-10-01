import 'angular-material/angular-material.css';
import ngMaterial from 'angular-material';
import angular from 'angular';
import playground from './playground';
import IndexCtrl from './index-ctrl';

angular.module('app', [ngMaterial, playground])
    .controller('IndexCtrl', IndexCtrl)
    .config(['$mdThemingProvider', function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('purple')
            .warnPalette('red')
            .backgroundPalette('grey');
    }]);
