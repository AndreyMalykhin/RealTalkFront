import 'codemirror/lib/codemirror.css';
import 'angular-ui-codemirror/src/ui-codemirror';

export default function playgroundCodeDirective() {
    return {
        restrict: 'E',
        template: require('./playground-code-directive.html')
    };
}
