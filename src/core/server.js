export default class Server {
    /**
     * @param {Object} $q
     * @param {Object} $timeout
     * @param {Object} eventManager
     */
    constructor($q, $timeout, eventManager) {
        /**
         * @type {Object}
         */
        this._$q = $q;

        /**
         * @type {Object}
         */
        this._$timeout = $timeout;

        /**
         * @type {Object}
         */
        this._eventManager = eventManager;
        
        /**
         * @type {Number}
         */
        this._pendingRequestsCount = 0;
    }

    /**
     * @param {String} code
     * @return {Promise}
     */
    executeCode(code) {
        let deferred = this._$q.defer();
        ++this._pendingRequestsCount;
        this._$timeout(() => {
            --this._pendingRequestsCount;
            // deferred.resolve('"POW!" + ' + code);
            let error = {code: 500, msg: 'Shiiiiiiieeeeeeet'};
            this._eventManager.publish({
                topic: Server.EVENT_REQUEST_ERROR,
                data: error
            });
            deferred.reject(error);
        }, 5000);
        return deferred.promise;
    }

    /**
     * @return {Boolean}
     */
    hasPendingRequests() {
        return this._pendingRequestsCount != 0;
    }
};

/**
 * @static
 * @const
 * @type {String}
 */
Server.EVENT_REQUEST_ERROR = 'server.request_error';

Server.$inject = ['$q', '$timeout', 'eventManager'];
