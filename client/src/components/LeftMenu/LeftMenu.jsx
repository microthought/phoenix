import React from 'react';
import { Button } from 'semantic-ui-react';
import RecentConversations from '../RecentConversations/RecentConversations.jsx';




class LeftMenu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
    <div className="LeftMenu">
      LeftMenu

      <RecentConversations />


      <Button
          onClick={this.props.fetchDerp}
          negative
          circular
          compact>
          Fire!
      </Button>

    </div>
    )
  }

}

export default LeftMenu;