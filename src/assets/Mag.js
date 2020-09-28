// Mag class definition - N. Nasteff 2020

class Mag {


  /* Create new mag object based off of Mag list
  ** Takes an argument of mag object, defined in MagList.js
  */

  constructor(mag) {
    
    /* Define default stats for a base level mag
    ** (base level, stat levels, stat progress)
    */
    
    this.mag = mag;
    this.mag.iq = 0;
    this.mag.sync = 0;
    this.mag.mind_progress = 0;
    this.mag.pow_progress = 0;
    this.mag.def_progress = 0;
    this.mag.dex_progress = 0;
    this.mag.mind_level = 0;
    this.mag.pow_level = 0;
    this.mag.def_level = 5;
    this.mag.dex_level = 0;
    this.mag.level = 5; 
  }

  // Feed a mag an item to increase it's levels


  magFeed(food1) {

    if (food1 === "monomate") {
      this.mag.pow_progress += this.mag.monomate.pow;
      this.mag.mind_progress += this.mag.monomate.mind;
      this.mag.dex_progress += this.mag.monomate.dex;
      this.mag.def_progress += this.mag.monomate.def;
      this.mag.iq += this.mag.monomate.iq;
      this.mag.sync += this.mag.monomate.sync;
    }
    else if (food1 === "dimate") {
      this.mag.pow_progress += this.mag.dimate.pow;
      this.mag.mind_progress += this.mag.dimate.mind;
      this.mag.dex_progress += this.mag.dimate.dex;
      this.mag.def_progress += this.mag.dimate.def;
      this.mag.iq += this.mag.monomate.iq;
      this.mag.sync += this.mag.monomate.sync;
    }
    else if (food1 === "trimate") {
      this.mag.pow_progress += this.mag.trimate.pow;
      this.mag.mind_progress += this.mag.trimate.mind;
      this.mag.dex_progress += this.mag.trimate.dex;
      this.mag.def_progress += this.mag.trimate.def;
      this.mag.iq += this.mag.trimate.iq;
      this.mag.sync += this.mag.trimate.sync;
    }
    else if (food1 === "monofluid") {
      this.mag.pow_progress += this.mag.monofluid.pow;
      this.mag.mind_progress += this.mag.monofluid.mind;
      this.mag.dex_progress += this.mag.monofluid.dex;
      this.mag.def_progress += this.mag.monofluid.def;
      this.mag.iq += this.mag.monofluid.iq;
      this.mag.sync += this.mag.monofluid.sync;
    }
    else if (food1 === "difluid") {
      this.mag.pow_progress += this.mag.difluid.pow;
      this.mag.mind_progress += this.mag.difluid.mind;
      this.mag.dex_progress += this.mag.difluid.dex;
      this.mag.def_progress += this.mag.difluid.def;
      this.mag.iq += this.mag.difluid.iq;
      this.mag.sync += this.mag.difluid.sync;
    }
    else if (food1 === "trifluid") {
      this.mag.pow_progress += this.mag.trifluid.pow;
      this.mag.mind_progress += this.mag.trifluid.mind;
      this.mag.dex_progress += this.mag.trifluid.dex;
      this.mag.def_progress += this.mag.trifluid.def;
      this.mag.iq += this.mag.trifluid.iq;
      this.mag.sync += this.mag.trifluid.sync;
    }
    else if (food1 === "antidote") {
      this.mag.pow_progress += this.mag.antidote.pow;
      this.mag.mind_progress += this.mag.antidote.mind;
      this.mag.dex_progress += this.mag.antidote.dex;
      this.mag.def_progress += this.mag.antidote.def;
      this.mag.iq += this.mag.antidote.iq;
      this.mag.sync += this.mag.antidote.sync;
    }
    else if (food1 === "antiparalys") {
      this.mag.pow_progress += this.mag.antiparalysis.pow;
      this.mag.mind_progress += this.mag.antiparalysis.mind;
      this.mag.dex_progress += this.mag.antiparalysis.dex;
      this.mag.def_progress += this.mag.antiparalysis.def;
      this.mag.iq += this.mag.antiparalysis.iq;
      this.mag.sync += this.mag.antiparalysis.sync;
    }
    else if (food1 === "sol") {
      this.mag.pow_progress += this.mag.sol.pow;
      this.mag.mind_progress += this.mag.sol.mind;
      this.mag.dex_progress += this.mag.sol.dex;
      this.mag.def_progress += this.mag.sol.def;
      this.mag.iq += this.mag.sol.iq;
      this.mag.sync += this.mag.sol.sync;
    }
    else if (food1 === "moon") {
      this.mag.pow_progress += this.mag.moon.pow;
      this.mag.mind_progress += this.mag.moon.mind;
      this.mag.dex_progress += this.mag.moon.dex;
      this.mag.def_progress += this.mag.moon.def;
      this.mag.iq += this.mag.moon.iq;
      this.mag.sync += this.mag.moon.sync;
    }
    else if (food1 === "star") {
      this.mag.pow_progress += this.mag.star.pow;
      this.mag.mind_progress += this.mag.star.mind;
      this.mag.dex_progress += this.mag.star.dex;
      this.mag.def_progress += this.mag.star.def;
      this.mag.iq += this.mag.star.iq;
      this.mag.sync += this.mag.star.sync;
    }

    this.levelMag();
    
  }
  /* A mag's stat progress level is from 1-100. Once the mag's stat progress 
  ** hits 100, it's base level increases by 1. This function facilitates
  ** this leveling mechanisim and is called after each mag feed to 
  ** level the mag accordingly.
  */
  
  levelMag() {

    if (this.mag.pow_progress > 99) {
      this.mag.pow_level++;
      this.mag.level++;
      this.mag.pow_progress %= 100;
    }
    if (this.mag.mind_progress > 99) {
      this.mag.mind_level++;
      this.mag.level++;
      this.mag.mind_progress %= 100;
    }
    if (this.mag.dex_progress > 99) {
      this.mag.dex_level++;
      this.mag.level++;
      this.mag.dex_progress %= 100;
    }
    if (this.mag.def_progress > 99) {
      this.mag.def_level++;
      this.mag.level++;
      this.mag.def_progress %= 100;
    }
    
  }

  // Console log some debug stuff
  debugger() {
    console.log(
      "Stats: \nPow: " +
        this.mag.pow_progress +
        "\nMind: " +
        this.mag.mind_progress +
        "\nDef: " +
        this.mag.def_progress +
        "\nDex: " +
        this.mag.dex_progress +
        "\nPow Level: " +
        this.mag.pow_level +
        "\nMind Level: " +
        this.mag.mind_level +
        "\nDef Level: " +
        this.mag.def_level +
        "\nDex Level: " +
        this.mag.dex_level +
        "\nOverall: " +
        this.mag.level
    );
  }
}

export default Mag;
