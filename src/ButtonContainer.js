import React from "react";
// import Button from './Button'

const ButtonContainer = (props) => {
  return (
    <div id="buttons">
      <button onClick={() => props.updateState(25)} id="add-quarter">
        Add a Quarter
      </button>
      <button onClick={() => props.updateState(10)} id="add-dime">
        Add a Dime
      </button>
      <button onClick={() => props.updateState(5)} id="add-nickel">
        Add a Nickel
      </button>
      <button onClick={() => props.updateState(1)} id="add-penny">
        Add a Penny
      </button>
    </div>
  );
};

export default ButtonContainer;
