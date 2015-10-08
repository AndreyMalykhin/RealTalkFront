import 'angular-material-data-table/dist/md-data-table.css';
import angular from 'angular';
import 'angular-material-data-table/dist/md-data-table';
import core from '../core';
import helpDirective from './help-directive';

export default angular.module('app.help', [core, 'md.data.table'])
    .directive('rtHelp', helpDirective)
    .config(config)
    .name;

/**
 * @param {Object} $stateProvider
 * @return {undefined}
 */
function config($stateProvider) {
    $stateProvider.state('help', {
        url: '/help',
        template: require('./help.html')
    });
}

config.$inject = ['$stateProvider'];
