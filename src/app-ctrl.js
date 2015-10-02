export default class AppCtrl {
    constructor($q) {
        this.$q = $q;
        this.code = '"POW!POW!";';
    }

    executeCode(code) {
        var deferred = this.$q.defer();
        deferred.resolve('"POW!" + ' + code);
        return deferred.promise;
    }
}

AppCtrl.$inject = ['$q'];
