/* login.controller.js
   Desiree Desario
   2016
*/

(function() {
  "use strict";

  angular
    .module("chatApp")
    .controller("LoginController", LoginController);

    LoginController.$inject = ["$state", "userDataService", "$log", "$cookies"];

    function LoginController($state, userDataService, $log, $cookies) {
      var vm = this;

      vm.user = userDataService;
      vm.logIn = logIn;

      vm.userHold = {
        name: ""
      };

      function logIn(name) {
        $log.debug("Logging in:", vm.userHold.name)

        //Log in the user by updating the service's .name:
        vm.user.name = vm.userHold.name;
        vm.userHold.name = "";
        //store user in cookies
        $cookies.put('userName', vm.user.name)
        //when user is logged in go to chat list
        $state.go("listChats");
      };
    };

})();
