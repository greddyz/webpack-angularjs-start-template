module.exports = function (ngModule) {
    ngModule.config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'views/home.html'
            })
            .when('/page', {
                    templateUrl: 'views/page.html'
                })
            .otherwise({
                template: '404 Page not found!'
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    });
};