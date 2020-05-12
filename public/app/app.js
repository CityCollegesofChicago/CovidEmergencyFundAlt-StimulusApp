'use strict';
var covidemergencyfundaltApp = angular.module('covidemergencyfundaltApp',
    ['ngResource',  'ui.router', 'ngFileUpload','as.sortable', 'ui.mask', 'ui.bootstrap', 'ngAnimate', 'angularSpinner' ])
    .config(function ($stateProvider,$urlRouterProvider,$locationProvider) {

        $stateProvider.state('admin',
            {
                url: '/covidemergencyfundalt/admin',
                templateUrl: "/covidemergencyfundalt/partials/admin/menu",
                controller: 'adminController'
            });

        $stateProvider.state('thanks',
            {
                url: '/covidemergencyfundalt/thanks',
                templateUrl: "/covidemergencyfundalt/partials/application/thanks"
            });


        $stateProvider.state('application',
            {
                url: '/covidemergencyfundalt/application',
                abstract: true,
                templateUrl: '/covidemergencyfundalt/partials/application/applicationForm',
                controller: 'applicationController'
            });


        $stateProvider
            .state('application.screen', {
                url: '/form',
                views: {
                    'general_contact_info': {
                        templateUrl: '/covidemergencyfundalt/partials/application/general_contact_info'
                    }
                }
            });


        $stateProvider.state('login',
            {
                url: '/covidemergencyfundalt/login',
                templateUrl: '/covidemergencyfundalt/partials/account/login',
                controller: 'loginController'
            });


        $urlRouterProvider.when('/covidemergencyfundalt', function ($state) {

            $state.go('login');
        });

        $urlRouterProvider.when('/covidemergencyfundalt/', function ($state) {

            $state.go('login');
        });

        $urlRouterProvider.when('/covidemergencyfundalt', function ($state) {

            $state.go('login');
        });

        $urlRouterProvider.when('/covidemergencyfundalt/', function ($state) {

            $state.go('login');
        });

        $urlRouterProvider.when('/covidemergencyfundalt', function ($state) {

            $state.go('login');
        });

        $urlRouterProvider.when('/covidemergencyfundalt/', function ($state) {

            $state.go('login');
        });

        $urlRouterProvider.when('/covidemergencyfundalt', function ($state) {

            $state.go('login');
        });

        $urlRouterProvider.when('/covidemergencyfundalt/', function ($state) {

            $state.go('login');
        });


        $urlRouterProvider.otherwise(function () {
            'login'
        });


        $locationProvider.html5Mode(true);


    });






angular.module('covidemergencyfundaltApp').run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (evt, current, previous, rejection) {
        console.log('state change error + rejection: ' + rejection);
        $state.go('login');
    });
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if (rejection === 'not authorized') {
            $state.go('login');
        }
    });
});

