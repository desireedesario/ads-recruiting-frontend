(function() {
  "use strict";

  angular
    .module("chatApp")
    .controller("MainController", MainController);

  MainController.$inject = ["$state", "userDataService", "$log", "$cookies"];

  function MainController($state, userDataService, $log, $cookies) {
    var vm = this;

    vm.user = userDataService;
    vm.logOut = logOut;

    function logOut() {
      $log.debug("Logging out:", vm.user.name);
      //deleted the name that is stored from cookies
      $cookies.remove('userName');
      //when user logs in go to chats
      vm.user.name = "";
      $state.go("homePage");
    }
  }
})();
