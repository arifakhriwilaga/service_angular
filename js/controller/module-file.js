// module appvalidation
var app_validation = angular.module('appvalidation', []);
// example validation
var NAME_REGEXP = /^[a-zA-Z.\s]*$/;
var URL_REGEXP = /^ari.com$/;
var AGE_REGEXP = /^[\d]+$/;
var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com$/i;

// validation for name
app_validation.directive('validEmail', function(){
	return{
		require: '?ngModel',
		link: function(scope, elm, attrs, ctrl){
		// only apply the validator if ngModel is present and Angular has added the email validator
      	if (ctrl && ctrl.$validators.email) {

        // this will overwrite the default Angular email validator
	        ctrl.$validators.email = function(modelValue) {
	          return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
	        };
    	}
		}	
	};
});
// example validation name
app_validation.directive('validName', function(){
	return{
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl){
		ctrl.$validators.name = function(modelValue, viewValue){
			var value = modelValue || viewValue;
            if (ctrl.$isEmpty(value)) {
                // consider empty models to be valid
                return true;
            }
            if (NAME_REGEXP.test(value)) {
                // it is valid
                return true;
            }
            // it is invalid
            return false;
		};
	}	
};
});
// end example name

// exampel validation URL
app_validation.directive('validUrl', function(){
	return{
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl){
		ctrl.$validators.url = function(modelValue, viewValue){
			var value = modelValue || viewValue;
            if (ctrl.$isEmpty(value)) {
                // consider empty models to be valid
                return true;
            }
            if (URL_REGEXP.test(value)) {
                // it is valid
                return true;
            }
            // it is invalid
            return false;
		};
	}	
};
});
// end URL

// example validation age
app_validation.directive('validAge', function(){
	return{
		require: 'ngModel',
		link: function(scope, elm, attrs, ctrl){
		ctrl.$validators.age = function(modelValue, viewValue){
			var value = modelValue || viewValue;
            if (ctrl.$isEmpty(value)) {
                // consider empty models to be valid
                return true;
            }
            if (AGE_REGEXP.test(value)) {
                // it is valid
                return true;
            }
            // it is invalid
            return false;
		};
	}	
};
});
// end Age
// end validation

// controller for save and show
app_validation.controller('ctrlForm',function($scope) {
	$scope.saved = {};
    $scope.save_data = function(player){
    	angular.copy(player, $scope.saved);
    };
});
// end controller
// end module

// service
angular.module('app', ['appservice','appcontrollers']);
// example validation
var moduleController = angular.module('appcontrollers',[]);
moduleController.controller('mainController',function($scope,$cstService){
    $scope.player_one = {};
    $scope.player_two = {};
    var player_one = new cstService();
    var player_two = new cstService();

    player_one.setName('Ari');
    player_two.setName('Fakhri');

    // get name and blood player one and two 
    $scope.player_one.name = player_one.getName();
    $scope.player_one.name = player_one.getBlood();
    $scope.player_two.name = player_two.getName();
    $scope.player_two.name = player_two.getBlood();

});

var moduleService = angular.module('app.service',[]);
moduleService.factory('cstService', function(){
    function(baseName){
        this.name = baseName;
        this.blood = 200;
        this.setName = function(name){
            this.name = name;
        }
        this.getName = function(){
            this.name = name;
        };
        this.setBlood = function(blood){
            this.blood = blood;
        }
        this.getBlood = function(){
            return this.blood;
        };
    };
    return player;
});

