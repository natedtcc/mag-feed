import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import MagInput from "./components/MagInput/MagInput";
import MagInfo from "./components/MagInfo/MagInfo";
import MagList from "./MagList";
import Mag from "./assets/Mag";

// Some test stuff

const mag = new Mag(MagList.mag);
mag.magFeed("dimate");
mag.magFeed("monomate");
mag.magFeed("dimate");
mag.magFeed("dimate");
mag.magFeed("monomate");
mag.magFeed("dimate");
mag.magFeed("dimate");
mag.magFeed("trifluid");
mag.magFeed("trifluid");
mag.magFeed("dimate");
mag.magFeed("monomate");
mag.magFeed("dimate");
const mags = MagList.evo2_0;

function App() {
  return (
    <div className={classes.App}>
      <Header></Header>
      <MagInput submit="" />
      <MagInfo mag={mags} />
    </div>
  );
}

export default App;
