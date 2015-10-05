import './global.css';
import angular from 'angular';
import postal from 'postal/lib/postal';
import Server from './server';
import ErrorHandler from './error-handler';

export default angular.module('app.core', [])
    .service('server', Server)
    .service('errorHandler', ErrorHandler)
    .factory('eventManager', () => {
        return postal;
    })
    .run(run)
    .name;

function run(errorHandler) {
    errorHandler.register();
}

run.$inject = ['errorHandler'];
