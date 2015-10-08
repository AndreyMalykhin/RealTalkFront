import 'angular-material/angular-material.css';
import 'animate.css/animate.css';
import './global.css';
import angular from 'angular';
import ngMaterial from 'angular-material';
import ngResource from 'angular-resource';
import ngAnimate from 'angular-animate';
import ngRouter from 'angular-ui-router/release/angular-ui-router';
import postal from 'postal/lib/postal';
import Server from './server';
import httpErrorHandler from './http-error-handler';

export default angular.module(
    'app.core', [ngResource, ngRouter, ngAnimate, ngMaterial])
    .constant('serverUrl', ENV_SERVER_URL)
    .service('server', Server)
    .factory('eventManager', () => {return postal;})
    .factory('httpErrorHandler', httpErrorHandler)
    .config(config)
    .name;

/**
 * @param {Object} $mdThemingProvider
 * @param {Object} $httpProvider
 * @return {undefined}
 */
function config($mdThemingProvider, $httpProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('purple')
        .warnPalette('red')
        .backgroundPalette('grey');
    $httpProvider.interceptors.push('httpErrorHandler');
}

config.$inject = ['$mdThemingProvider', '$httpProvider'];
