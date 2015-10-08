import './app-directive.css';

/**
 * @return {Object}
 */
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
         * @type {Server}
         */
        this._server = server;
    }

    /**
     * @return {Boolean}
     */
    isBusy() {
        return this._server.hasPendingRequests();
    }
};

Ctrl.$inject = ['server'];
