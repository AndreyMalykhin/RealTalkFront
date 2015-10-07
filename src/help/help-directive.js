import './help-directive.css';

export default function helpDirective() {
    return {
        restrict: 'E',
        template: require('./help-directive.html'),
        scope: {}
    };
}
