import React from 'react';
import { Message } from 'semantic-ui-react';

const ChatMessage = (props) => {
  console.log("ChatMessage Props: ",props);
  
  return (
  <Message
  compact
  className="chat-message">
    <p>{props.message}</p>
  </ Message>
)}


export default ChatMessage;