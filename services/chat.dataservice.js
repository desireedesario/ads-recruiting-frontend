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
      {chatName: "Sammy and Tina", content: "Hey How are you?", participants: ["Conrad", "Andrew"]},
      {chatName: "Spanish Class 101", content: "Are you ready for the test?", participants: ["Mike", "Kate", "Ira"]},
      {chatName: "Mario Party Party", content: "The party is going to be this Friday.", participants: ["Brittany", "Storm", "Joshua"]},
      {chatName: "Mom and Dad", content: "How are you son?", participants: ["Mom", "Dad"]}
    ]
  }

  // back end calls
  //   GET (get all chats)
  //   function getAllChats(res, req){
  //     Chats.find(function(err, chats) {
  //       if(err) res.json({msg:"Could not find any chat groups"});
  //
  //       res.json({chats: chats});
  //     });
  //   }
  //   // POST (create a new chat)
  //   function createChat(res, req){
  //     console.log("body: ", req.body);
  //
  //     var chat = new Chat(req.body);
  //
  //     chat.save(function(err) {
  //       if(err) res.json({msg:"Could  not create this chat group because: " + err});
  //
  //       res.json({chat: chat});
  //     });
  //   }
  //   // GET (show a single chat)
  //   function getChat(req, res){
  //     var id = req.params.id;
  //
  //     Chat.findById({_id: id}, function(err, chat){
  //       if(err) res.json({msg:"Could not find chat group because: " + err});
  //
  //       res.json({chat: chat});
  //     })
  //   }
  //   //PUT (update a chat)
  //   function updateChat(req, res){
  //     var id = req.params.id;
  //
  //     Chat.findById({_id: id}, function(err, chat){
  //       if(err) res.json({msg:"Could not find this chat group because: " + err});
  //
  //       if(req.body.chatName) chat.chatName = req.body.chatName;
  //       if(req.body.content) chat.content = req.body.content;
  //       if(req.body.participants) chat.participants = req.body.participants;
  //
  //       chat.save(function(err){
  //         if(err) res.json({msg: "Could not update this chat group because: " + err});
  //
  //         res.json({msg: "Chat group has sucessfully been updated", chat: chat})
  //       });
  //     });
  //   }
  //   // DELETE (remove a chat board)
  //   function removeChat(res, req){
  //     var id = req.params.id;
  //
  //     Chat.remove({_id: id}, function(err){
  //       if(err) res.json({msg: "Could not delete this chat group because", err});
  //
  //       res.json({msg: "chat group sucessfully deleted"});
  //     });
  //   }
  //
  //   module.exports = {
  //     getAllChats  = getAll,
  //     createChat   = createChat,
  //     getChat      = getChat,
  //     updateChat   = updateChat,
  //     removeChat   = removeChat
  //   }

})();
