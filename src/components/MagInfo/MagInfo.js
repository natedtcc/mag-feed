import React from "react";
import classes from "./MagInfo.module.css";
import MagTable from "../MagTable/MagTable";

const MagInfo = (props) => {
  // Create a string based off of the mag object's name array
  let i = 0;
  let name_array = props.mag.names;
  let mag_names = "";
  while (i < name_array.length) {
    console.log("test");
    if (i === name_array.length - 1) {
      mag_names = mag_names + "& " + name_array[i];
    } else {
      mag_names = mag_names + name_array[i] + ", ";
    }
    i++;
  }
  return (
    <div className={classes.MagInfo}>
      {/* Pass mag object props and names string to the table component*/}
      <MagTable mag={props.mag} names={mag_names} />
    </div>
  );
};

export default MagInfo;
