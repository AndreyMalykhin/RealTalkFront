export default function playgroundCodeDirective() {
    return {
        restrict: 'E',
        require: '^^rtPlayground',
        template: require('./playground-code-directive.html')
    };
}
