(function() {
  "use strict";

  angular
    .module("chatApp")
    .controller("ChatsController", ChatsController);

  ChatsController.$inject = ["$state", "userDataService", "$log", "$http"];

  function ChatsController($state, userDataService, $log, $http){
    var vm = this;
    vm.user = userDataService;
    vm.add = addChat;
    vm.newChat = {chatName: ""};

    vm.all = [
      {chatName: "Sammy and Tina"},
      {chatName: "Spanish Class 101"},
      {chatName: "Mario Party Party"},
      {chatName: "Mom and Dad"}
    ]

    $log.log(vm.all)

    function addChat(){
      vm.all.push(vm.newChat)
      vm.newChat = {chatName: ""}
    }

  }
})();
