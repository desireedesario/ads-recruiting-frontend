(function() {
  "use strict";

  angular
    .module("chatApp")
    .controller("ChatsController", ChatsController);

  ChatsController.$inject = ["$state", "userDataService", "chatDataService", "$log", "$http"];

  function ChatsController($state, userDataService, chatDataService, $log, $http) {
    var vm = this;
    vm.user = userDataService;
    vm.chat = chatDataService;
    vm.add = addChat;
    vm.newChat = {chatName: ""};

    //make sure that the
    $log.log(vm.chat.all)

    function addChat(){
      vm.all.push(vm.newChat)
      vm.newChat = {chatName: "", content: "", participants: ""}
    }



  }
})();
