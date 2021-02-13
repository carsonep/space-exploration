import React, { useEffect } from "react";
import "../SpaceView/SpaceView.scss";

import Config from "@arcgis/core/config";
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import TileLayer from "@arcgis/core/layers/TileLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import LayerList from "@arcgis/core/widgets/LayerList";

Config.apiKey =
  "AAPKd531b53f980f4a87880dc870c8c1c7d3aLPvIb210--jpJYpsM1SrSSRUEbo-XNGtLQXMaRO_IPPMyZAQt0UMBk8SvvY94QI";

Config.assetsPath = "assets/";

function MercuryView() {
  useEffect(() => {
    const mercuryImagery = new TileLayer({
      url:
        "https://tiles.arcgis.com/tiles/qyI00Ol6Z064DQ0K/arcgis/rest/services/Mercury_Basemap/MapServer?f=html&cacheKey=8507dca0e8342d46",
      title: "Imagery",
      copyright: "USGS Astrogeology Science Center, NASA, JPL, Esri",
    });

    const map = new Map({
      layers: [mercuryImagery],
    });

    const view = new SceneView({
      map: map,
      container: "viewDiv",
      qualityProfile: "high",
      // setting the spatial reference for mercury_2000 coordinate system
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

    const locationPlaces = new FeatureLayer({
      url:
        "https://services9.arcgis.com/qyI00Ol6Z064DQ0K/arcgis/rest/services/MercuryNamedPlaces/FeatureServer",
      title: "Mercury Craters",
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
                size: 1,
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
    map.add(locationPlaces);

    const humanImprint = new FeatureLayer({
      url:
        "https://services9.arcgis.com/qyI00Ol6Z064DQ0K/arcgis/rest/services/MercuryHumanSites/FeatureServer",
      title: "Landing Site",
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
    map.add(humanImprint);

    var layerList = new LayerList({
      view: view,
    });
    // Adds widget below other elements in the top left corner of the view
    view.ui.add(layerList, "bottom-left");
  }, []);

  return (
    <div className="body__div">
      <div id="viewDiv"></div>
    </div>
  );
}

export default MercuryView;
