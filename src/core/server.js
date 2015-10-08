export default class Server {
    /**
     * @param {String} url
     * @param {Object} $q
     * @param {Object} $resource
     * @param {Object} $http
     */
    constructor(url, $q, $resource, $http) {
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
        this._$http = $http;

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
        this._vm.execute(null, {'code': code}).$promise
            .then((vm) => {
                deferred.resolve(vm.output);
            }).catch((response) => {
                let error = (typeof response.data === 'string')
                    ? {code: response.status, msg: response.statusText}
                    : response.data;
                deferred.reject(error);
            });
        return deferred.promise;
    }

    /**
     * @return {Boolean}
     */
    hasPendingRequests() {
        return this._$http.pendingRequests.length != 0;
    }
};

Server.$inject = ['serverUrl', '$q', '$resource', '$http'];
