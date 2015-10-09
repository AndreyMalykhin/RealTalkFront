import './help-directive.css';

/**
 * @return {Object}
 */
export default function helpDirective() {
    return {
        restrict: 'E',
        template: require('./help-directive.html'),
        scope: {},
        bindToController: true,
        controller: Ctrl,
        controllerAs: 'helpCtrl'
    };
}

class Ctrl {
    /**
     * @param {Window} $window
     */
    constructor($window) {
        /**
         * @type {Array}
         */
        this.tables = [
            {
                title: 'Language Constructs',
                rows: [
                    {myDick: 'homie', yourDick: 'import'},
                    {myDick: 'roll', yourDick: 'while'},
                    {myDick: 'keeprollin', yourDick: 'continue'},
                    {myDick: 'holdon', yourDick: 'break'},
                    {myDick: 'bringitback', yourDick: 'return'},
                    {myDick: 'if', yourDick: 'if'},
                    {myDick: 'elz', yourDick: 'else'},
                    {myDick: 'fresh', yourDick: 'new'},
                    {myDick: 'real', yourDick: 'native'},
                    {myDick: 'yeah', yourDick: 'true'},
                    {myDick: 'nah', yourDick: 'false'}
                ]
            },
            {
                title: 'Data Types',
                rows: [
                    {myDick: 'void', yourDick: 'void'},
                    {myDick: 'bool', yourDick: 'bool'},
                    {myDick: 'char', yourDick: 'char'},
                    {myDick: 'int', yourDick: 'int'},
                    {myDick: 'long', yourDick: 'long'},
                    {myDick: 'double', yourDick: 'double'},
                    {myDick: 'string', yourDick: 'String'}
                ]
            }
        ];

        /**
         * @type {Window}
         */
        this._$window = $window;
    }

    /**
     * @return {undefined}
     */
    goBack() {
        this._$window.history.back();
    }
}

Ctrl.$inject = ['$window'];
