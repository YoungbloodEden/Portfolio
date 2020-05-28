(function(){
  angular.module('ProfileSite', ['ui.router'])
    .config(MainRouter);

    MainRouter.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

    function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise("/home");

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: '../home.html'
        })
        .state('projects', {
          url: '/projects',
          templateUrl: '../projects.html'
        })
        .state('contact', {
          url: '/contact',
          templateUrl: '../contact.html'
        })

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    }
})()
