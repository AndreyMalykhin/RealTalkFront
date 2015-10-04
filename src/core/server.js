export default class Server {
    constructor($q, $timeout) {
        this._$q = $q;
        this._$timeout = $timeout;
        this._pendingRequestsCount = 0;
    }

    executeCode(code) {
        var deferred = this._$q.defer();
        var self = this;
        ++this._pendingRequestsCount;
        this._$timeout(function() {
            --self._pendingRequestsCount;
            deferred.resolve('"POW!" + ' + code);
        }, 5000);
        return deferred.promise;
    }

    hasPendingRequests() {
        return this._pendingRequestsCount != 0;
    }
};

Server.$inject = ['$q', '$timeout'];
