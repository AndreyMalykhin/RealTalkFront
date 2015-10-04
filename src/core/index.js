import angular from 'angular';
import Server from './server';

export default angular.module('app.core', [])
    .service('server', Server)
    .name;
