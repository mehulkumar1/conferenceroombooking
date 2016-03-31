'use strict';

angular.module('conferenceroom.controllers', [])
.controller('MainCtrl', function($scope) {


		$scope.locationchecklist = [

				{ id:  1,name: "Cybage Towers" },
				{ id:  2,name: "Gandhinagar"  },
				{ id:  3,name: "Hydarabad" },
				{ id:  4,name: "West Avenue"},

		];

		$scope.checkAll = function () {
		        if ($scope.selectedAll) {
		            $scope.selectedAll = true;
		        } else {
		            $scope.selectedAll = false;
		        }
		        angular.forEach($scope.locationchecklist, function (location) {
		            location.isChecked = $scope.selectedAll;
		        });


		};


	$scope.facilitychecklist = [
			{ id: 1,name: "Multiple Computers"},
			{ id: 2, name: "Network Point"},
			{ id: 3,name: "Projector"},
			{ id: 4,name: "Video Conferensing" },
			{ id: 5, name: "White Board"},

	];




	$scope.Purpose = [
		{id: 1,name:'Appraisal Meeting'},
		{id: 2,name:'Client Call' },
		{id: 3,name:'Client Visit' },
		{id: 4,name:'Interview' },
		{id: 5,name:'Team Meeting' },
		{id: 6,name:'Training' },
		{id: 7,name:'Video Conferensing' },

	];

 $scope.myPurpose = $scope.Purpose[0]; // red


$scope.PriorityFacilities=[


	{id: 1,name:'White Board'},
	{id: 2,name:'Projector' },



];

 $scope.myPriorityFacilities = $scope.PriorityFacilities[0];



})
