(function() {
  "use strict";

  angular
    .module("chatApp")
    .service("chatDataService", chatDataService);

  chatDataService.$inject = ["$log", "userDataService"];

  function chatDataService($log, userDataService) {
    var vm = this;
    vm.user = userDataService;
    // vm.getAllChats = getAllChats;
    // vm.newChat = {};
    // vm.addChat = addChat;
    // vm.deleteChat = deleteChat;
    // vm.updateChat = updateChat;
    //
    // //This is where I would place call backs to the back end. //$http should be injected and used
    //   //GET all chat groups
    //   function getAllChats(){
    //     $http.get("http://localhost:3000/api/chats")
    //     .then(function(res){
    //       vm.all = res.data.chats;
    //     }, function(err){
    //       console.log(err)
    //     });
    //   }
    //   //POST add a new chat group
    //   function addChat(){
    //     $http.post("http://localhost:3000/api/chats", vm.newChat)
    //     .then(function(res){
    //       vm.all.push(res.data.chat);
    //       vm.newChat = {};
    //     }, function(err){
    //       console.log(err)
    //     });
    //   }
    //   //DELETE remove a chat group
    //   function deleteChat(chat) {
    //     console.log(chat._id);
    //     $http.delete("http://localhost:3000/api/chats/"+chat._id)
    //       .then(function(){
    //         vm.all.splice(vm.all.indexOf(chat(chat), 1))
    //       });
    //   }
    //   //PATCH update/edit a chat group
    //   function updateChat(chat){
    //     $http.patch("http://localhost:3000/api/chats/"+chat._id, chat)
    //     .then(function(res){
    //
    //     }, function(err){
    //       console.log(err)
    //     });
    //   }

    //hardcoded seeds
    vm.all = [
      {chatName: "The Three Musketeers", content: ["This is Conrad, WHATS GOING ON?"], participants: ["Conrad", "Andrew"]},
      {chatName: "Spanish Class 101", content: ["Are you ready for the test?"], participants: ["Mike", "Kate", "Ira"]},
      {chatName: "Mario Party Party", content: ["The party is going to be this Friday."], participants: ["Brittany", "Storm", "Joshua"]},
      {chatName: "Mom and Dad", content: ["How are you son?"], participants: ["Mom", "Dad"]}
    ]
  }

})();
