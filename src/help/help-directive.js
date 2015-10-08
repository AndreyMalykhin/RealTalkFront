import './help-directive.css';

/**
 * @return {Object}
 */
export default function helpDirective() {
    return {
        restrict: 'E',
        template: require('./help-directive.html'),
        scope: {}
    };
}
