(function() {
  "use strict";

  angular
    .module("chatApp")
    .service("chatDataService", chatDataService);

  chatDataService.$inject = ["$log", "userDataService"];

  function chatDataService($log, userDataService) {
    var vm = this;
    vm.user = userDataService;

    vm.all = [
      {chatName: "Sammy and Tina", content: "Hey How are you?", participants: ["Conrad", "Andrew"]},
      {chatName: "Spanish Class 101", content: "Are you ready for the test?", participants: ["Mike", "Kate", "Ira"]},
      {chatName: "Mario Party Party", content: "The party is going to be this Friday.", participants: ["Brittany", "Storm", "Joshua"]},
      {chatName: "Mom and Dad", content: "How are you son?", participants: ["Mom", "Dad"]}
    ]

    // $log.log(vm.all)

  }

})();
