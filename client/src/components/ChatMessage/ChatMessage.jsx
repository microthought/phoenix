import React from 'react';
import { Message } from 'semantic-ui-react';
import classNames from 'classnames';


const ChatMessage = (props) => {

  var classes = classNames({
    'chat-message': true,
    partner: !props.isUser,
    user: props.isUser
  });


  return (
  <Message
  compact
  className={classes}>
    <p>{props.message}</p>
    <p className="time">9:45 PM</p>
  </ Message>
)}


export default ChatMessage;