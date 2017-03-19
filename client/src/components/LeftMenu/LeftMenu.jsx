import React from 'react';

class LeftMenu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
    <div className="LeftMenu"> DDDD
      LeftMenu

      <div>
        <button
            onClick={this.props.fetchDerp}>
            Fire!
          </button>
      </div>
    </div>
    )
  }

}

export default LeftMenu;