import angular from 'angular';
import core from '../core';
import playground from '../playground';
import appDirective from './app-directive';

export default angular.module('app', [core, playground])
    .directive('rtApp', appDirective)
    .name;
