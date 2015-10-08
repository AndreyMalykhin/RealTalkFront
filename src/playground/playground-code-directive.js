import 'codemirror/lib/codemirror.css';

/**
 * @return {Object}
 */
export default function playgroundCodeDirective() {
    return {
        restrict: 'E',
        require: '^^rtPlayground',
        template: require('./playground-code-directive.html')
    };
}
