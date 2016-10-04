(function() {
  "use strict";

  angular
    .module("chatApp")
    .controller("ChatsController", ChatsController);

  ChatsController.$inject = ["$state", "userDataService", "$log", "$http"];

  function ChatsController($state, userDataService, $log, $http){
    var vm = this;

    vm.user = userDataService;

    vm.chats = [];

    vm.newChats = {
      content: ""
    }

    vm.deleteChat = deleteChat;
    vm.updateChat = updateChat;
    vm.postChat = postChat;
    vm.showChat = showChat;
    vm.resetEditChat = resetEditChat;

    
  }
})
