import React from 'react';
import { Image } from 'semantic-ui-react';

const MainMenu = (props) => {

  return (
    <div className="main-menu">
      <Image 
        src={props.avatar}
        shape='circular'/>
    </div>
  )
}

export default MainMenu;