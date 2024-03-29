import React, { useEffect } from "react";
import "../SpaceView/SpaceView.scss";
import { NavLink } from "react-router-dom";
import config from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import ElevationLayer from "@arcgis/core/layers/ElevationLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import LayerList from "@arcgis/core/widgets/LayerList";
import HomeButton from "../HomeButton/HomeButton";

config.assetsPath = "assets/";

function MarsView() {
  useEffect(() => {
    // Config.defaults.io.corsEnabledServers;

    const marsElevation = new ElevationLayer({
      url:
        "https://tiles.arcgis.com/tiles/qyI00Ol6Z064DQ0K/arcgis/rest/services/MARS_Elevation_Layer/ImageServer",
      copyright:
        "NASA, ESA, HRSC, Goddard Space Flight Center, USGS Astrogeology Science Center, Esri",
    });

    const marsImagery = new TileLayer({
      url:
        "https://tiles.arcgis.com/tiles/qyI00Ol6Z064DQ0K/arcgis/rest/services/Mars_Basemap3/MapServer",
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
      // setting the spatial reference for Mars_2000 coordinate system
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
        "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/Mars_Nomenclature_Mountains/FeatureServer/layers",
      definitionExpression: "type = 'Crater, craters'",
      title: "Mars Craters",
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
                  size: 1,
                  color: [255, 255, 255, 0.7],
                },
                font: {
                  size: 11,
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

    const landingLayer = new FeatureLayer({
      url:
        "https://services9.arcgis.com/qyI00Ol6Z064DQ0K/ArcGIS/rest/services/SpaceX_Potential_Landing_Sites/FeatureServer/0",

      title: "SpaceX Landing Sites",
      renderer: {
        type: "simple",
        symbol: {
          type: "simple-marker",
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
          labelExpressionInfo: { expression: "$feature.FeatName" },
          symbol: {
            type: "label-3d",
            symbolLayers: [
              {
                type: "text",
                material: {
                  color: [0, 0, 0, 0.9],
                },
                halo: {
                  size: 1,
                  color: [255, 255, 255, 0.7],
                },
                font: {
                  size: 11,
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
      visible: false,
    });

    map.add(landingLayer);

    const shadedRelief = new TileLayer({
      url:
        "https://tiles.arcgis.com/tiles/nzS0F0zdNLvs7nc8/arcgis/rest/services/MOLA_elevation_wm/MapServer",
      title: "Shaded Relief",
      visible: false,
    });
    map.add(shadedRelief);

    var layerList = new LayerList({
      view: view,
    });
    // Adds widget below other elements in the top left corner of the view
    view.ui.add(layerList, "bottom-left");
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

export default MarsView;
