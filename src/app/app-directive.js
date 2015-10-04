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
    constructor(server) {
        this._server = server;
        this.code = '"POW!POW!";';
    }

    executeCode(code) {
        return this._server.executeCode(code);
    }

    isBusy() {
        return this._server.hasPendingRequests();
    }
};

Ctrl.$inject = ['server'];
