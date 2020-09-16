import React from "react";

export default function DisplayTotal(props) {
  return (
    <div>
      <h2>You have a total of {props.total} cents</h2>
    </div>
  );
}
