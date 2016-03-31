'use strict';
angular.module('conferenceroom', ['ngRoute', 'conferenceroom.controllers', 'conferenceroom.services'])
.config(function ($routeProvider, $locationProvider) {

	$routeProvider
    .when('/', {
        templateUrl: 'views/main.tpl.html',
        controller: 'MainCtrl',
        reloadOnSearch: false
    })
    .otherwise({
        redirectTo: '/'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  });
