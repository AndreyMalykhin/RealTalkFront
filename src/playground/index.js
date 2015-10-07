import angular from 'angular';
import 'angular-ui-codemirror/src/ui-codemirror';
import core from '../core';
import playgroundDirective from './playground-directive';
import playgroundCodeDirective from './playground-code-directive';
import playgroundOutputDirective from './playground-output-directive';
import PlaygroundCtrl from './playground-ctrl';

export default angular.module('app.playground', [core, 'ui.codemirror'])
    .directive('rtPlayground', playgroundDirective)
    .directive('rtPlaygroundCode', playgroundCodeDirective)
    .directive('rtPlaygroundOutput', playgroundOutputDirective)
    .config(config)
    .name;

function config($stateProvider) {
    $stateProvider.state('playground', {
        url: '/playground',
        template: require('./playground.html'),
        controller: PlaygroundCtrl,
        controllerAs: 'playgroundCtrl'
    });
}

config.$inject = ['$stateProvider'];
