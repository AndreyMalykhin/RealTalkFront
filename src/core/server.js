export default class Server {
    /**
     * @param {String} url
     * @param {Object} $q
     * @param {Object} $resource
     * @param {Object} eventManager
     */
    constructor(url, $q, $resource, eventManager) {
        /**
         * @type {String}
         */
        this._url = url;
        
        /**
         * @type {Object}
         */
        this._$q = $q;

        /**
         * @type {Object}
         */
        this._$resource = $resource;

        /**
         * @type {Object}
         */
        this._eventManager = eventManager;
        
        /**
         * @type {Number}
         */
        this._pendingRequestsCount = 0;

        /**
         * @type {Resource}
         */
        this._vm = $resource(
            this._url + '/vm',
            null,
            {execute: {method: 'POST'}});
    }

    /**
     * @param {String} code
     * @return {Promise}
     */
    executeCode(code) {
        let deferred = this._$q.defer();
        ++this._pendingRequestsCount;
        this._vm.execute(null, {'code': code}).$promise
            .then((vm) => {
                deferred.resolve(vm.output);
            }).catch((response) => {
                let error = (typeof response.data === 'string')
                    ? {code: response.status, msg: response.statusText}
                    : response.data;
                this._eventManager.publish({
                    topic: Server.EVENT_REQUEST_ERROR,
                    data: error
                });
                deferred.reject(error);
            })
            .finally(() => {
                --this._pendingRequestsCount;
            });
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

Server.$inject = ['serverUrl', '$q', '$resource', 'eventManager'];
