module.exports = function (ngModule) {
    ngModule.directive('firstDirective', ['$rootScope', function ($rootScope) {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'partials/first-directive.html',
            link: function(scope, element, attrs) {
                //
            }
        };
    }]);
};