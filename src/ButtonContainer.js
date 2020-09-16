import React from "react";
import { connect } from "react-redux";
// import Button from './Button'
import { addQuarter, addDime } from "./actions/coinActions";

const ButtonContainer = (props) => {
  console.log(props);
  return (
    <div id="buttons">
      <button onClick={props.addQuarter} id="add-quarter">
        Add a Quarter
      </button>
      <button id="add-dime" onClick={props.addDime}>
        Add a Dime
      </button>
      <button id="add-nickel">Add a Nickel</button>
      <button id="add-penny">Add a Penny</button>
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addQuarter: () => dispatch(addQuarter()),
//     addDime: () => dispatch(addDime()),
//   };
// };
export default connect(null, {addQuarter, addDime})(ButtonContainer);
