
var moduleroutes = angular.module('modulroute', ['ngRoute']);
 moduleroutes.controller('ctrlMain', function($scope, $route, $routeParams, $location){
    $scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
});
moduleroutes.controller('crlSrvcTwo', function($scope, $routeParams){
    $scope.name = "Ari fakhri wilaga with ctrlSvcsTwo";
    $scope.params = $routeParams;
});
moduleroutes.controller('crlSrvcThree', function($scope, $routeParams){
    $scope.name = "Ari fakhri wilaga with ctrlSvcsThree";
    $scope.params = $routeParams;
});

moduleroutes.config(function($routeProvider,$locationProvider){
    $routeProvider
    .when('/',{
        templateUrl: '/index.html'
    })
    .when('/svcs-two',{
        templateUrl: '/svcs-two.html',
        controller:'crlSrvcTwo'
    })
    .when('/svcs-three:id',{
        templateUrl: '/svcs-three.html',
        controller:'crlSrvcThree'
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});


