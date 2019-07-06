import React, { Component } from "react";
import container from "@material-ui/core/Container";
import "./App.css";
import Card from "./components/card";
import VerticalLinearStepper from "./components/table";


class App extends Component {
  constructor() {
    super();

    this.state = {
      details: [{slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",},
                {slot1: " ",slot2: " ",slot3: " ",slot4: " ",}
                ]
    };
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/m55dx")
      //fetch("")
      .then(res => res.json())
      .then(data => {
        this.setState({ details: data });
      })
      .catch(console.log);
  }
  render() {
    return (
      <div>
        
        <VerticalLinearStepper details={this.state.details}/>
      </div>
    );
  }
}

export default App;
