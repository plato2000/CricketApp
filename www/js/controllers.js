angular.module('starter.controllers', [])

.controller('ScorekeeperCtrl', function($scope) {
	$scope.totalRuns = 0;
	$scope.totalWickets = 0;
	$scope.totalOvers = 0;
	$scope.totalBalls = 0;
	$scope.extraRuns = 0;

	$scope.activeRuns = '0';
    $scope.setActiveRuns = function(type) {
        $scope.activeRuns = type;
    };
    $scope.isActiveRuns = function(type) {
        return type === $scope.activeRuns;
    };


    $scope.activeBall = 'None';
    $scope.setActiveBall = function(type) {
        $scope.activeBall = type;
    };
    $scope.isActiveBall = function(type) {
        return type === $scope.activeBall;
    };


    $scope.updateScreen = function() {
    	document.getElementById("score").innerHTML = "Score: " + $scope.totalRuns.toString() + "-" + $scope.totalWickets.toString();
    	document.getElementById("overs").innerHTML = "Overs: " + $scope.totalOvers.toString() + "." + $scope.totalBalls.toString();
    	document.getElementById("extras").innerHTML = "Extras: " + $scope.extraRuns.toString();
    };


    $scope.submitRuns = function() {
  		console.log("reached");
  		if($scope.activeBall === "Wicket") {
  			$scope.totalWickets++;
  			console.log($scope.totalWickets);
  			$scope.updateScreen();
  		} else if($scope.activeBall === ".") {
  			$scope.totalBalls--;
  		} else if($scope.activeBall === "B") {
  			$scope.totalRuns++;
  			$scope.extraRuns += parseInt($scope.activeRuns);
  		} else if($scope.activeBall === "Y") {
  			$scope.totalRuns++;
  			$scope.extraRuns++;
  			$scope.totalBalls--;
  			$scope.extraRuns += parseInt($scope.activeRuns);
  		} else if($scope.activeBall === "N") {
  			$scope.totalRuns++;
  			$scope.extraRuns++;
  			$scope.totalBalls--;
  			$scope.extraRuns += parseInt($scope.activeRuns);
  		}
  		$scope.totalBalls++;
  		if($scope.totalBalls > 6) {
  			$scope.totalBalls = 0;
  			$scope.totalOvers++;
  		}
  		if(!(($scope.activeBall === "Wicket") || ($scope.activeBall === "."))) {
  			$scope.totalRuns = $scope.totalRuns + parseInt($scope.activeRuns);
  		}
  		$scope.updateScreen();
	};
})
