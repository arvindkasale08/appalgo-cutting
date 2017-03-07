(function () {
    'use strict';

    angular
        .module('cuttingAlgoApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
