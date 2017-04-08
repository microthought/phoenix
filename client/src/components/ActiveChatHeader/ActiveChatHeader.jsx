import React from 'react';
import { Image, Icon } from 'semantic-ui-react';

const ActiveChatHeader = (props) => {

  return (
    <div className="active-chat-header">
      <Image
        shape='circular'
        src={props.avatar}
      />
      <div className="contact-name">
        <p>Leidi Uribe</p>
      </div>
      <div className="buttons">
        <Icon 
        name="tasks"
        size="big" />
        <Icon 
        name="idea"
        size="big" />
        <Icon 
        name="options"
        size="big" />
        
      </div>
      

    </div>
  )
}


export default ActiveChatHeader;