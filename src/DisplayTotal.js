import React from "react";
import {connect} from "react-redux"

function DisplayTotal(props) {
  return (
    <div>
      <h2>You have a total of {props.total} cents</h2>
    </div>
  );
}

function mapStateToProps(state){
  console.log(state)
  return {total: state.total}
}

export default connect(mapStateToProps)(DisplayTotal)