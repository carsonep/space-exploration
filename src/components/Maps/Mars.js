import React from "react";
import SpaceView from "../SpaceView/SpaceView";

function Mars() {
  const activeMap = "Mars";

  const baseLayer =
    "https://api.nasa.gov/mars-wmts/catalog/Mars_Viking_MDIM21_ClrMosaic_global_232m";

  return (
    <div>
      <SpaceView baseLayer={props.activeMap} />
    </div>
  );
}

export default Mars;
