/* chatsDetails.controller.js
   Desiree Desario
   2016
*/

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
      var newContent = vm.chat.all.filter(function(e) {return e.title == vm.title})
      newContent.content.push(vm.newMsg.content)
      clearForm();
    }

    function clearForm() {
      document.getElementById("comment").$setPristine;
      vm.newMsg.content = '';

    }
  };
})();
