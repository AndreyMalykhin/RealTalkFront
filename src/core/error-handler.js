import Server from './server';

export default class ErrorHandler {
    /**
     * @param {Object} notifier
     * @param {Object} eventManager
     */
    constructor(notifier, eventManager) {
        /**
         * @type {Object}
         */
        this._notifier = notifier;

        /**
         * @type {Object}
         */
        this._eventManager = eventManager;
    }

    /**
     * @return {undefined}
     */
    register() {
        this._eventManager.subscribe({
            topic: Server.EVENT_REQUEST_ERROR,
            callback: (error) => {
                this._notifier.show(this._notifier.simple().content(error.msg));
            }
        });
    }
};

ErrorHandler.$inject = ['$mdToast', 'eventManager'];
