import React from "react";
import { connect } from "react-redux";

function DisplayTotal(props) {
  return (
    <div>
      <h2>You have a total of {props.total} cents</h2>
      <h3>{props.txt}</h3>
    </div>
  );
}

const mapStateToProps = (stateFromStore) => {
  console.log(stateFromStore);
  return stateFromStore
  // return {
  //   total: stateFromStore.total,
  //   txt: stateFromStore.txt,
  // };
};

// the return value of this argument will set the PROPS

export default connect(mapStateToProps)(DisplayTotal);
