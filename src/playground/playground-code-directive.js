import 'codemirror/lib/codemirror.css';
import 'angular-ui-codemirror/src/ui-codemirror';

export default function playgroundCodeDirective() {
    return {
        restrict: 'E',
        require: '^^rtPlayground',
        template: require('./playground-code-directive.html')
    };
}
