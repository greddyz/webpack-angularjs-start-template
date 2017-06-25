module.exports = function (ngModule) {
    ngModule.service('firstService', ['$rootScope', function firstService ($rootScope) {

        return {
            firstMethod: function () {
                //
            }
        };
    }]);
};