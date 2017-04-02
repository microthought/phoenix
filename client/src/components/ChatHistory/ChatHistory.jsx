import React from 'react';
import ChatMessage from '../ChatMessage/ChatMessage.jsx';
import {Button} from 'semantic-ui-react';


const ChatHistory = (props) => {

  var renderedMessages = props.messages
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