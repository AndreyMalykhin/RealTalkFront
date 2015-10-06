import angular from 'angular';
import 'angular-ui-codemirror/src/ui-codemirror';
import core from '../core';
import playgroundDirective from './playground-directive';
import playgroundCodeDirective from './playground-code-directive';
import playgroundOutputDirective from './playground-output-directive';

export default angular.module('app.playground', [core, 'ui.codemirror'])
    .directive('rtPlayground', playgroundDirective)
    .directive('rtPlaygroundCode', playgroundCodeDirective)
    .directive('rtPlaygroundOutput', playgroundOutputDirective)
    .name;
