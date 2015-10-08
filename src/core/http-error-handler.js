/**
 * @param {Object} $injector
 * @return {Object}
 */
export default function httpErrorHandler($injector) {
    return {
        responseError: (response) => {
            let error = (typeof response.data === 'string')
                ? response.statusText : response.data.msg;
            let notifier = $injector.get('$mdToast');
            notifier.show(notifier.simple().content(error));
            return $injector.get('$q').reject(response);
        }
    };
};

httpErrorHandler.$inject = ['$injector'];
