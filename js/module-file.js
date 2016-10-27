angular.module('app', ['app.services', 'app.controllers']);
var moduleCtrl = angular.module('app.controllers', []);

// controller example service
moduleCtrl.controller('myCtrl', function($scope, cstService) {
    $scope.player_one = {};
    $scope.player_two = {};
    var player_one = new cstService();
    var player_two = new cstService();
    player_one.setName('Ari');
    player_two.setName('Fakhri');
    $scope.player_one.name = player_one.getName();
    $scope.player_two.name = player_two.getName();
    $scope.player_one.blood = player_one.getBlood();
    $scope.player_two.blood = player_two.getBlood();
});

var moduleSrvcs = angular.module('app.services', []);
moduleSrvcs.factory('cstService', function() {
    function hero(baseName) {
        this.name = baseName;
        this.blood = 200;
        this.setName = function(name) {
            this.name = name;
        };
        this.getName = function() {
            return this.name;
        };
        this.setBlood = function(blood) {
            this.blood = blood;
        };
        this.getBlood = function() {
            return this.blood;
        };
    };
    return hero;
});


// section service
moduleCtrl.directive("directive", function() {
    return {
        templateUrl: "service.html"  ,
        controller: "myCtrl"  
    };
});

// routes
// moduleCtrl.config(function($routeProvider){
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
// });

// UI Route
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
//   var httpState = {
//     name: 'http',
//     url: '/http',
//     templateUrl: '/http.html'
//   }

//   $stateProvider.state(serviceState);
//   $stateProvider.state(aboutState);
//   $stateProvider.state(httpState);

// });

