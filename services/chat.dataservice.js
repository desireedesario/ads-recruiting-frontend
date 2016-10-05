(function() {
  "use strict";

  angular
    .module("chatApp")
    .service("chatDataService", chatDataService);

  chatDataService.$inject = ["$log"];

  function chatDataService($log) {
    var vm = this;

    vm.all = [
      {chatName: "Sammy and Tina", content: "Hey How are you?"},
      {chatName: "Spanish Class 101", content: "Are you ready for the test?"},
      {chatName: "Mario Party Party", content: "The party is going to be this Friday."},
      {chatName: "Mom and Dad", content: "How are you son?"}
    ]

    // $log.log(vm.all)

  }

})();
