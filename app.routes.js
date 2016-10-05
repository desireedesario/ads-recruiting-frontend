(function() {
  "use strict";

  angular
    .module("chatApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouteProvider) {
    $stateProvider
      .state("homePage", {
        url: "/",
        templateUrl: "./templates/home.html",
        controller: "LoginController",
        controllerAs: "vm"
      })
      .state("listChats", {
        url: "/chats",
        templateUrl: "./templates/listChats.html",
        controller: "ChatsController",
        controllerAs: "vm"
      })
      .state("chatDetails", {
        url: "/chatDetails/:title?content?participants",
        templateUrl: "./templates/chatDetails.html",
        controller: "ChatDetailsController",
        controllerAs: "vm"
      });

      $urlRouteProvider.otherwise("/");
  }

})();
