import { usa } from "./data/mapData.js";
export const dimensions = {
  width: window.innerWidth,
  height: window.innerHeight,
  margin: window.innerWidth / 20,
};

export const usaShapeData = topojson.feature(usa, usa.objects.cb_2018_us_state_5m);
export const usaProjection = d3.geoAlbersUsa().fitExtent(
  [
    [dimensions.margin, dimensions.margin],
    [
      dimensions.width - dimensions.margin,
      dimensions.height - dimensions.margin,
    ],
  ],
  usaShapeData
);
