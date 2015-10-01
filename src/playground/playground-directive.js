export default function playgroundDirective() {
    return {
        restrict: 'E',
        template: require('./playground-directive.html'),
        bindToController: true,
        controllerAs: 'playgroundCtrl',
        controller: Controller,
        scope: {
            code: '=rtCode',
            onExecute: '&rtOnExecute'
        }
    };
}

class Controller {
    constructor() {
        this.output = 'DUH!DUH!DUH!';
    }
    
    executeCode() {
        var self = this;
        this.onExecute({code: this.code}).then(function(output) {
            self.output = output;
        });
    }
}
