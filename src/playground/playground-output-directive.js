import './playground-output-directive.css';

/**
 * @return {Object}
 */
export default function playgroundOutputDirective() {
    return {
        restrict: 'E',
        require: '^^rtPlayground',
        template: require('./playground-output-directive.html')
    };
}
