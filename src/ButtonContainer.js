import React from "react";
// import Button from './Button'
import { connect } from "react-redux";
import {
  addQuarter,
  addDime,
  addNickel,
  addPenny,
} from "./actions/coinActions";

// props.dispatch({type: "QUARTER"})

const ButtonContainer = (props) => {
  return (
    <div id="buttons">
      <button onClick={() => props.addQuarter()} id="add-quarter">
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

const mapDispatchToProps = (dispatch) => {
  return {
    addQuarter: () => {
      dispatch(addQuarter());
    },
    addDime: () => {
      dispatch(addDime());
    },
    addNickel: () => {
      dispatch(addNickel());
    },
    addPenny: () => {
      dispatch(addPenny());
    },
  };
};

export default connect(null, mapDispatchToProps)(ButtonContainer);
// export default connect(null, {addPenny, addQuarter, addDime})(ButtonContainer);
