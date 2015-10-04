import './playground-directive.css';

export default function playgroundDirective() {
    return {
        restrict: 'E',
        template: require('./playground-directive.html'),
        bindToController: true,
        controllerAs: 'playgroundCtrl',
        controller: Ctrl,
        scope: {
            code: '=rtCode',
            onExecute: '&rtOnExecute'
        }
    };
}

class Ctrl {
    constructor() {
        this.output = '';
    }
    
    executeCode() {
        var self = this;
        this.onExecute({code: this.code}).then(function(output) {
            self.output = output;
        });
    }
}
