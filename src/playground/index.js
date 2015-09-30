import angular from 'angular';
import 'codemirror/lib/codemirror.css';
import 'codemirror/lib/codemirror';
import 'angular-ui-codemirror/src/ui-codemirror';
import PlaygroundDirective from './playground-directive';
import PlaygroundInputDirective from './playground-input-directive';

export default angular.module('app.playground', ['ui.codemirror'])
    .directive('rtPlayground', PlaygroundDirective)
    .directive('rtPlaygroundInput', PlaygroundInputDirective)
    .name;
