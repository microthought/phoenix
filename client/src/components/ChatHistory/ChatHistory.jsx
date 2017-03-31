import React from 'react';
import ChatMessage from '../ChatMessage/ChatMessage.jsx';
import {Button} from 'semantic-ui-react';


var genie = "Thanks for releasing me from my lamp";
var cat = "Meow meow feed me!";
var derp ="I don't think this is a good idea. We should skip in the rain."
var messages = [];

for(var i = 0; i < 10; i++){
  messages.push(genie, cat, derp);
}
console.log(messages);

const ChatHistory = () => {

  var renderedMessages = messages
  .map((message,i) => <ChatMessage
    className="chat-message"
    message={message}
    isUser={!!(i % 2)}
    key={message + i} />);


  return (
    <div className="chat-history">
      {renderedMessages}
    </div>
  )
}

export default ChatHistory;