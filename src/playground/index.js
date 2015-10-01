import angular from 'angular';
import playgroundDirective from './playground-directive';
import playgroundCodeDirective from './playground-code-directive';
import playgroundOutputDirective from './playground-output-directive';

export default angular.module('app.playground', ['ui.codemirror'])
    .directive('rtPlayground', playgroundDirective)
    .directive('rtPlaygroundCode', playgroundCodeDirective)
    .directive('rtPlaygroundOutput', playgroundOutputDirective)
    .name;
