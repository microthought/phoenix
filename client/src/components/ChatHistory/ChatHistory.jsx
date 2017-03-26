import React from 'react';
import ChatMessage from '../ChatMessage/ChatMessage.jsx';
import {Button} from 'semantic-ui-react';


var genie = "Thanks for releasing me from my lamp";
var cat = "Meow meow feed me!";
var messages = [];

for(var i = 0; i < 10; i++){
  messages.push(genie, cat);
}
console.log(messages);

const ChatHistory = () => {

  var renderedMessages = messages
  .map((message,i) => <ChatMessage
    message={message}
    key={message + i} />);


  return (
    <div className="chat-history">
      {renderedMessages}
    </div>
  )
}

export default ChatHistory;