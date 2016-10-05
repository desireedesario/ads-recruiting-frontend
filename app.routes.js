(function() {
  "use strict";

  angular
    .module("chatApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouteProvider) {
    $stateProvider
      .state("chatList", {
        url: "/",
        templateUrl: "./templates/home.html",
        controller: "LoginController",
        controllerAs: "vm"
      })
      .state("allChats", {
        url: "/chats",
        templateUrl: "./templates/allChats.html",
        controller: "ChatsController",
        controllerAs: "vm"
      })
      .state("chatDetails", {
        url: "/chatDetails/:title?content",
        templateUrl: "./templates/chatDetails.html",
        controller: "ChatDetailsController",
        controllerAs: "vm"
      });

      $urlRouteProvider.otherwise("/");
  }

})();
