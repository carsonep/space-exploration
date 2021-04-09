import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../SpaceView/SpaceView.scss";
import config from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import ElevationLayer from "@arcgis/core/layers/ElevationLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import HomeButton from "../HomeButton/HomeButton";

config.apiKey =
  "AAPKd531b53f980f4a87880dc870c8c1c7d3aLPvIb210--jpJYpsM1SrSSRUEbo-XNGtLQXMaRO_IPPMyZAQt0UMBk8SvvY94QI";

function MoonView() {
  useEffect(() => {
    const marsElevation = new ElevationLayer({
      url:
        "https://tiles.arcgis.com/tiles/WQ9KVmV6xGGMnCiQ/arcgis/rest/services/Moon_Elevation_Surface/ImageServer",
      copyright:
        "NASA, ESA, HRSC, Goddard Space Flight Center, USGS Astrogeology Science Center, Esri",
    });

    const marsImagery = new TileLayer({
      url:
        "https://tiles.arcgis.com/tiles/WQ9KVmV6xGGMnCiQ/arcgis/rest/services/Moon_Basemap_Tile0to9/MapServer",
      title: "Imagery",
      copyright: "USGS Astrogeology Science Center, NASA, JPL, Esri",
    });

    const map = new Map({
      ground: {
        layers: [marsElevation],
      },
      layers: [marsImagery],
    });

    const view = new SceneView({
      map: map,
      container: "viewDiv",
      qualityProfile: "medium",
      spatialReference: {
        wkid: 102100,
      },
      environment: {
        background: {
          type: "color",
          color: [0, 0, 0, 0],
        },
      },
      camera: {
        position: {
          x: 27.63423,
          y: -6.34466,
          z: 1281525.766,
          spatialReference: 102100,
        },
        heading: 332.28,
        tilt: 37.12,
      },
    });

    const cratersLayer = new FeatureLayer({
      url:
        "https://services.arcgis.com/VXxCfMpXUKuFKFvE/arcgis/rest/services/LunarCraters/FeatureServer",
      title: "Craters",
      renderer: {
        type: "simple",
        symbol: {
          type: "polygon-3d",
          symbolLayers: [
            {
              type: "fill",
              material: { color: [255, 255, 255, 0.1] },
              outline: {
                color: [0, 0, 0, 0.4],
                size: 2,
              },
            },
          ],
        },
      },
      labelingInfo: [
        {
          labelPlacement: "above-center",
          labelExpressionInfo: { expression: "$feature.NAME" },
          symbol: {
            type: "label-3d",
            symbolLayers: [
              {
                type: "text",
                material: {
                  color: [0, 0, 0, 0.9],
                },
                halo: {
                  size: 2,
                  color: [255, 255, 255, 0.7],
                },
                font: {
                  size: 10,
                },
              },
            ],
            verticalOffset: {
              screenLength: 40,
              maxWorldLength: 500000,
              minWorldLength: 0,
            },
            callout: {
              type: "line",
              size: 0.5,
              color: [255, 255, 255, 0.9],
              border: {
                color: [0, 0, 0, 0.3],
              },
            },
          },
        },
      ],
    });

    map.add(cratersLayer);

    const shadedRelief = new TileLayer({
      url:
        "https://tiles.arcgis.com/tiles/FF3qnCUixr5w9JQi/arcgis/rest/services/Moon_Geology/MapServer/",
      title: "Geology Relief",
      visible: false,
    });

    map.add(shadedRelief);

    var layerList = new LayerList({
      view: view,
    });

    view.ui.add(layerList, {
      position: "bottom-left",
    });
  }, []);

  return (
    <div className="body__div">
      <NavLink to="/">
        <HomeButton />
      </NavLink>
      <div id="viewDiv"></div>
    </div>
  );
}

export default MoonView;
