(function() {
  "use strict";

  angular
    .module("chatApp")
    .controller("ChatsController", ChatsController);

  ChatsController.$inject = ["$state", "userDataService", "chatDataService", "$log"];

  function ChatsController($state, userDataService, chatDataService, $log) {
    var vm = this;
    vm.user = userDataService;
    vm.chat = chatDataService;
    vm.addChat = addChat;
    vm.newChat = {chatName: "", content: "", participants: ""};

    //make sure that the chats are iterating through
    $log.log(vm.chat.all)

    //pushes each participant into an array
    function addChat(){
      vm.newChat.participants = vm.newChat.participants.split(' ');
      vm.chat.all.push(vm.newChat)
      vm.newChat = {chatName: "", content: "", participants: ""};
    }

  }
})();
