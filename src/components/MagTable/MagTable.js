import React from "react";
import classes from "./MagTable.module.css";
import Aux from "../../hoc/Aux";

const MagTable = (props) => {
  return (
    <Aux>
      <div className={classes.MagTable}>
        <p>{props.names}</p>
        <table>
          <thead>
            <tr>
              <th>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ITEM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              </th>
              <th>
                <label>SYNC</label>
              </th>
              <th>&nbsp;&nbsp;IQ&nbsp;&nbsp;</th>
              <th>&nbsp;DEF&nbsp;</th>
              <th>&nbsp;POW&nbsp;</th>
              <th>&nbsp;DEX&nbsp;</th>
              <th>MIND</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Monomate</td>
              <td>{props.mag.monomate.sync}</td>
              <td>{props.mag.monomate.iq}</td>
              <td>{props.mag.monomate.def}</td>
              <td>{props.mag.monomate.pow}</td>
              <td>{props.mag.monomate.dex}</td>
              <td>{props.mag.monomate.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Dimate</td>
              <td>{props.mag.dimate.sync}</td>
              <td>{props.mag.dimate.iq}</td>
              <td>{props.mag.dimate.def}</td>
              <td>{props.mag.dimate.pow}</td>
              <td>{props.mag.dimate.dex}</td>
              <td>{props.mag.dimate.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Trimate</td>
              <td>{props.mag.trimate.sync}</td>
              <td>{props.mag.trimate.iq}</td>
              <td>{props.mag.trimate.def}</td>
              <td>{props.mag.trimate.pow}</td>
              <td>{props.mag.trimate.dex}</td>
              <td>{props.mag.trimate.mind}</td>
            </tr>

            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Monofluid</td>
              <td>{props.mag.monofluid.sync}</td>
              <td>{props.mag.monofluid.iq}</td>
              <td>{props.mag.monofluid.def}</td>
              <td>{props.mag.monofluid.pow}</td>
              <td>{props.mag.monofluid.dex}</td>
              <td>{props.mag.monofluid.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Difluid</td>
              <td>{props.mag.difluid.sync}</td>
              <td>{props.mag.difluid.iq}</td>
              <td>{props.mag.difluid.def}</td>
              <td>{props.mag.difluid.pow}</td>
              <td>{props.mag.difluid.dex}</td>
              <td>{props.mag.difluid.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Trifluid</td>
              <td>{props.mag.trifluid.sync}</td>
              <td>{props.mag.trifluid.iq}</td>
              <td>{props.mag.trifluid.def}</td>
              <td>{props.mag.trifluid.pow}</td>
              <td>{props.mag.trifluid.dex}</td>
              <td>{props.mag.trifluid.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Antidote</td>
              <td>{props.mag.antidote.sync}</td>
              <td>{props.mag.antidote.iq}</td>
              <td>{props.mag.antidote.def}</td>
              <td>{props.mag.antidote.pow}</td>
              <td>{props.mag.antidote.dex}</td>
              <td>{props.mag.antidote.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>
                Antiparalysis
              </td>
              <td>{props.mag.antiparalysis.sync}</td>
              <td>{props.mag.antiparalysis.iq}</td>
              <td>{props.mag.antiparalysis.def}</td>
              <td>{props.mag.antiparalysis.pow}</td>
              <td>{props.mag.antiparalysis.dex}</td>
              <td>{props.mag.antiparalysis.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>
                Sol Atomizer
              </td>
              <td>{props.mag.sol.sync}</td>
              <td>{props.mag.sol.iq}</td>
              <td>{props.mag.sol.def}</td>
              <td>{props.mag.sol.pow}</td>
              <td>{props.mag.sol.dex}</td>
              <td>{props.mag.sol.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>
                Moon Atomizer
              </td>
              <td>{props.mag.moon.sync}</td>
              <td>{props.mag.moon.iq}</td>
              <td>{props.mag.moon.def}</td>
              <td>{props.mag.moon.pow}</td>
              <td>{props.mag.moon.dex}</td>
              <td>{props.mag.moon.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>
                Star Atomizer
              </td>
              <td>{props.mag.star.sync}</td>
              <td>{props.mag.star.iq}</td>
              <td>{props.mag.star.def}</td>
              <td>{props.mag.star.pow}</td>
              <td>{props.mag.star.dex}</td>
              <td>{props.mag.star.mind}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Aux>
  );
};

export default MagTable;
