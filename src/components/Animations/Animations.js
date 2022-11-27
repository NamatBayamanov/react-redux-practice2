import { useState } from "react";
import classes from "./Animations.module.scss";
import ForPhotos from "./ForPhotos/ForPhotos";
function Animations() {
  const [loaderVisibility, setLoaderVisibility] = useState(false);

  const switcher = (e) => {
    setLoaderVisibility(!loaderVisibility);
  };

  return (
    <div className={classes.Animations}>
      <div className={classes.block}></div>
      <div className={classes.wrap}>
        <button className={classes.button} onClick={switcher}>
          {loaderVisibility ? "hide" : "show"}
        </button>
        <div className={classes.contain}>
          {loaderVisibility && <div className={classes.spinner}></div>}
        </div>
      </div>
    </div>
  );
}

export default Animations;
