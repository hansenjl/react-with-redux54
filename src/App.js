import React from "react";

import "./App.css";
import ButtonContainer from "./ButtonContainer";
import DisplayTotal from "./DisplayTotal";

class App extends React.Component {


  updateState = (amount) => {
    this.setState((prevState) => {
      return { total: prevState.total + amount };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DisplayTotal  />
          <ButtonContainer updateState={this.updateState} />
        </header>
      </div>
    );
  }
}

export default App;
