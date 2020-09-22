import React from "react";
import classes from "./MagInput.module.css";

const MagInput = (props) => {
  return (
    <div className={classes.MagInput}>
      <form onSubmit={props.submit}>
        <input type="text" value="Enter a mag name.." onChange="" />
        <br />
        <br />
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default MagInput;
