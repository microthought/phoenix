import { Component } from "react";
import { render } from "react-dom";


class App extends Component {
  constructor (props){
    super(props);



  }

  render() {
    return(
      <div id="app">Good day mate!</div>
    );
  }
}

render(<App/>, document.getElementById("app"));




