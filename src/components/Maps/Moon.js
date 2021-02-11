import React, { useEffect } from "react";
import "../SpaceView/SpaceView.scss";
import Map from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
import ElevationLayer from "@arcgis/core/layers/ElevationLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import LayerList from "@arcgis/core/widgets/LayerList";

function MoonView() {
  useEffect(() => {
    const marsElevation = new ElevationLayer({
      url:
        "https://tiles.arcgis.com/tiles/WQ9KVmV6xGGMnCiQ/arcgis/rest/services/Moon_Elevation_Surface/ImageServer?f=json",
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
      qualityProfile: "high",
      // setting the spatial reference for Mars_2000 coordinate system
      spatialReference: {
        wkid: 102100,
      },
      environment: {
        background: {
          type: "color",
          color: [0, 0, 0, 0],
        },
        starsEnabled: false,
        atmosphereEnabled: false,
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
        "https://pdsimage2.wr.usgs.gov/Individual_Investigations/moon_lro.kaguya_multi_craterdatabase_robbins_2018/data/lunar_crater_database_robbins_2018.xml",
      definitionExpression: "type = 'Crater, craters'",
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

    var layerList = new LayerList({
      view: view,
    });
    // Adds widget below other elements in the top left corner of the view
    view.ui.add(layerList, {
      position: "top-left",
    });
  }, []);

  return (
    <div className="body__div">
      <div id="viewDiv"></div>
    </div>
  );
}

export default MoonView;
