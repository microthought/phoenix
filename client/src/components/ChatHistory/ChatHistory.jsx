import React from 'react';
import ChatMessage from '../ChatMessage/ChatMessage.jsx';
import {Button} from 'semantic-ui-react';


var genie = "Thanks for releasing me from my lamp!";
var cat = "Meow meow feed me!";
var messages = [cat, genie];


const ChatHistory = () => {

  var renderedMessages = () => messages
  .map(message => <ChatMessage
    message={message}
    key={message} />)


  return (
    <div className="chat-history">
      <Button
      onClick={()=>addDerp()}
      content="derrp" />
      {renderedMessages()}
    </div>
  )
}

export default ChatHistory;