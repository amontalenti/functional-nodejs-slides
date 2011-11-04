$(document).ready(function(){
  now.receiveMessage = function(name, message){
    $("#messages").append("<br>" + name + ": " + message);
  }
  $("#send-button").click(function(){
    now.distributeMessage("Hello, world");
  });
  now.name = prompt("What's your name?", "");
});
