
// var moduleroutes = angular.module('modulroute', ['ngRoute']);
//  moduleroutes.controller('ctrlMain', function($scope, $route, $routeParams, $location){
//     $scope.$route = $route;
//     $scope.$location = $location;
//     $scope.$routeParams = $routeParams;
// });
// moduleroutes.controller('crlSrvcTwo', function($scope, $routeParams){
//     $scope.name = "Ari fakhri wilaga with ctrlSvcsTwo";
//     $scope.params = $routeParams;
// });
// moduleroutes.controller('crlSrvcThree', function($scope, $routeParams){
//     $scope.name = "Ari fakhri wilaga with ctrlSvcsThree";
//     $scope.params = $routeParams;
// });

// moduleroutes.config(function($routeProvider,$locationProvider){
//     $routeProvider
//     .when('/',{
//         templateUrl: '/index.html'
//     })
//     .when('/service',{
//         templateUrl: '/service.html',
//         controller:'myCtrl'
//     })
//     .when('/svcs-three:id',{
//         templateUrl: '/svcs-three.html',
//         controller:'crlSrvcThree'
//     });

//     $locationProvider.html5Mode({
//         enabled: true,
//         requireBase: false
//     });
// });
// var moduleCtrl = angular.module('route', ['ui.router']);
// moduleCtrl.config(function($stateProvider) {
//   var serviceState = {
//     name: 'service',
//     url: '/service',
//     templateUrl: '/service.html',
//     controller: 'myCtrl'
//   }

//   var aboutState = {
//     name: 'about',
//     url: '/about',
//     template: '<h3>Its the UI-Router hello world app!</h3>'
//   }

//   $stateProvider.state(serviceState);
//   $stateProvider.state(aboutState);
// });

