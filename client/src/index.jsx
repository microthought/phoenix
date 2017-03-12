import React, { Component } from "react";
import { render } from "react-dom";
import axios from 'axios';


//****************\\
// Just for Funsies
//****************\\

let user = "Mike";


class App extends React.Component {
  constructor (props){
    super(props);

  }

  render() {
    return(
      <div>Good day mate!
        <button onClick={this.fetchDerp}>Fire!</button>
      </div>
    );
  }

  fetchDerp (){
    console.log("fire the request canon!");
    axios.get('http://localhost:3000/target')
    .then(res => console.log("Return Volley: ", res.data))
    .catch(fail => console.log("fail ", fail));
  }
}

render(<App/>, document.getElementById("app"));




