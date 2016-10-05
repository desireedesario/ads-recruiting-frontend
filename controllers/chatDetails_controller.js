(function() {
  "use strict";

  angular
    .module("chatApp")
    .controller("ChatDetailsController", ChatDetailsController);

    ChatDetailsController.$inject = ["userDataService", "chatDataService", "$state", "$stateParams"];

  function ChatDetailsController(userDataService, chatDataService, $state, $stateParams) {
   var vm = this;
   vm.userDataService = userDataService;
   vm.chatDataService = chatDataService;
   vm.title = $stateParams.title;
   vm.content = $stateParams.content;
   vm.allMsgs = [];
   vm.newMsg = {
      id: 0,
      user: vm.userDataService,
      content: ""
    };
    vm.addMsg = addMsg;
    vm.remove  = remove;

    //create a message
    function addMsg() {
      vm.allMsgs.push({
      content: vm.newMsg.content
      });
    }

    // caps out allMsgs at 200
    while (vm.allMsgs.length > 200) {
      vm.allMsgs.shift();
    }

    vm.state = $state.current
    vm.params = $stateParams;

    //delete a message
    function remove(removeMsg) {
      vm.allMsgs = vm.allMsgs.filter(function(msg) {
        return hint.id != removeHint.id;
      })
    };

  };
})();
