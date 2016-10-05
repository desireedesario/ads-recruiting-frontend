(function() {
  "use strict";

  angular
    .module("chatApp")
    .factory("userDataService", userDataService);

  userDataService.$inject = ["$cookies"];

  function userDataService($cookies) {
    var user = {
      name: $cookies.get('userName'),
      isLoggedIn:  isLoggedIn
    };

    return user;

    function isLoggedIn() {
      if (user.name) {
        return user.name.length !== 0;
      }
    }
  }

})();
