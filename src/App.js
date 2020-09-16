import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import ButtonContainer from "./ButtonContainer";
import DisplayTotal from "./DisplayTotal";

class App extends React.Component {
  state = {
    total: 0,
  };

  updateState = (amount) => {
    this.setState((prevState) => {
      return { total: prevState.total + amount };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <DisplayTotal total={this.state.total} />
          <ButtonContainer updateState={this.updateState} />
        </header>
      </div>
    );
  }
}

export default App;
