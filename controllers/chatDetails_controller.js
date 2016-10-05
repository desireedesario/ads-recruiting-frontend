(function() {
  "use strict";

  angular
    .module("chatApp")
    .controller("ChatDetailsController", ChatDetailsController);

    ChatDetailsController.$inject = ["userDataService"];

  function ChatDetailsController(userDataService) {
   var vm = this;
   vm.userDataService = userDataService;
   vm.allMsgs = [];
   vm.newMsg = {
      id: 0,
      user: vm.userDataService,
      content: ""
    }
    vm.addMsg = addMsg;
    vm.remove  = remove;

    //create a message
    function addMsg() {
      vm.allMsgs.push({
      content: vm.newMsg.content
      });
    }

    // Fill the form to edit a message



    //delete a message
    function remove(removeMsg) {
      vm.allMsgs = vm.allMsgs.filter(function(msg) {
        return hint.id != removeHint.id;
      })
    };
  };
})();
