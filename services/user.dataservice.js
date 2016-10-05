(function() {
  "use strict";

  angular
    .module("chatApp")
    .factory("userDataService", userDataService);

  userDataService.$inject = [];

  function userDataService() {
    var user = {
      name: "",
      isLoggedIn:  isLoggedIn
    };

    return user;

    function isLoggedIn() {
      return user.name.length !== 0;
    }
  }

})();
