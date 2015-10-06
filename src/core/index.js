import 'angular-material/angular-material.css';
import './global.css';
import angular from 'angular';
import ngMaterial from 'angular-material';
import ngResource from 'angular-resource';
import postal from 'postal/lib/postal';
import Server from './server';
import ErrorHandler from './error-handler';

export default angular.module('app.core', [ngResource, ngMaterial])
    .constant('serverUrl', ENV_SERVER_URL)
    .service('server', Server)
    .service('errorHandler', ErrorHandler)
    .factory('eventManager', () => {return postal;})
    .config(config)
    .run(run)
    .name;

function config($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('purple')
        .warnPalette('red')
        .backgroundPalette('grey');
}

config.$inject = ['$mdThemingProvider'];

function run(errorHandler) {
    errorHandler.register();
}

run.$inject = ['errorHandler'];
