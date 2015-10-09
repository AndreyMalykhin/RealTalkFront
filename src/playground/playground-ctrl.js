export default class PlaygroundCtrl {
    /**
     * @param {Server} server
     */
    constructor(server) {
        /**
         * @type {String}
         */
        this.code = require('./code-example.txt');

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
