import React from 'react';
import {List, Image} from 'semantic-ui-react';

const Conversation  = ({avatar, displayName, lastMessageText}) => (
  <List.Item>
        <Image avatar src={avatar} />
        <List.Content>
          <List.Header as="a" content={displayName} />
          <List.Description content={lastMessageText} />
        </List.Content>
  </List.Item>
)


export default Conversation;