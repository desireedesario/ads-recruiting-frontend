(function() {
  "use strict";

  angular
    .module("chatApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouteProvider) {
    $stateProvider
      .state("allChats", {
        url: "/",
        templateUrl: "./templates/allChats.html",
        controller: "LoginController",
        controllerAs: "vm"
      })
      .state("singleChat", {
        url: "/chat",
        templateUrl: "./templates/singleChat",
        controller: "ChatsController",
        controllerAs: "vm"
      });

      $urlRouteProvider.otherwise("/");
  }

})();
