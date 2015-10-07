export default class PlaygroundCtrl {
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
};

PlaygroundCtrl.$inject = ['server'];
