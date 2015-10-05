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
            _onExecute: '&rtOnExecute'
        }
    };
}

class Ctrl {
    constructor() {
        /**
         * @type {String}
         */
        this.output = '';

        /**
         * @type {FormController}
         */
        this.form = null;
    }

    /**
     * @return {undefined}
     */
    executeCode() {
        if (this.form.$invalid) {
            return;
        }
        
        this._onExecute({code: this.code}).then((output) => {
            this.output = output;
        });
    }
}
