(function() {
  "use strict";

  angular
    .module("chatApp")
    .controller("ChatDetailsController", ChatDetailsController);

    ChatDetailsController.$inject = ["userDataService", "chatDataService", "$state", "$stateParams"];

  function ChatDetailsController(userDataService, chatDataService, $state, $stateParams) {
   var vm = this;
   vm.user = userDataService;
   vm.clearForm = clearForm;
   vm.chat = chatDataService;
   vm.state = $state.current;
   vm.params = $stateParams;
   vm.title = $stateParams.title;
   vm.content = $stateParams.content;
   vm.participants = $stateParams.participants;
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
      var newContent = $.grep(vm.chat.all, function(x){return x.title == vm.title})
      newContent.push(vm.newMsg.content)
      clearForm();
    }

    function clearForm() {
      document.getElementById("comment").$setPristine;
      vm.newMsg.content = '';

    }

    // // caps out allMsgs at 200
    // while (vm.allMsgs.length > 200) {
    //   vm.allMsgs.shift();
    // }

    //delete a message
    function remove(removeMsg) {
      //ADD REMOVE FUNCTION HERE
      }
  };
})();
