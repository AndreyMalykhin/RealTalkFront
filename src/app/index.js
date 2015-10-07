import angular from 'angular';
import playground from '../playground';
import help from '../help';
import appDirective from './app-directive';

export default angular.module('app', [playground, help])
    .directive('rtApp', appDirective)
    .config(config)
    .name;

function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/playground');
}

config.$inject = ['$urlRouterProvider'];
