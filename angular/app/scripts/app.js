'use strict';

angular.module('linkbundler', [
  'ui.router',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ActiveResource'
])
  .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

    // For any unmatched url, redirect to /
    $urlRouterProvider.otherwise('/');

    // Root:
    $stateProvider
      .state('root', {
        url: '',
        abstract: true,
        views: {}
      })
  .run(function ($rootScope) {

    //
    // Router interceptors:

    // When a state is not found:
    $rootScope.$on('$stateNotFound', function (event) {
      // Redirect to the orders index page.
      event.preventDefault();
      console.log('Oh no! We encountered an error.');
    });

    // When a state change fails:
    $rootScope.$on('$stateChangeError', function () {
      // Let the user know the transition failed:
      console.log('Sorry, we encountered an error.');
    })

  });
