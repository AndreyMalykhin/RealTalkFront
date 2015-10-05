import './app-directive.css';

export default function appDirective() {
    return {
        restrict: 'E',
        template: require('./app-directive.html'),
        controllerAs: 'appCtrl',
        controller: Ctrl,
        scope: {},
        bindToController: true
    };
}

class Ctrl {
    /**
     * @param {Server} server
     */
    constructor(server) {
        /**
         * @type {String}
         */
        this.code = '"POW!POW!";';

        /**
         * @type {Server}
         */
        this._server = server;
    }

    /**
     * @param {String} code
     * @return {Promise}
     */
    executeCode(code) {
        return this._server.executeCode(code);
    }

    /**
     * @return {Boolean}
     */
    isBusy() {
        return this._server.hasPendingRequests();
    }
};

Ctrl.$inject = ['server'];
