import React from 'react';
import { Button } from 'semantic-ui-react';

class LeftMenu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
    <div className="LeftMenu"> DDDD
      LeftMenu

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