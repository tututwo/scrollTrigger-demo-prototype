import { usaProjection, usaShapeData } from "../utility.js";
async function Map() {
  /********************************
   * * Load data
   ********************************/
  // const mapData = await d3.json("https://cdn.jsdelivr.net/npm/us-atlas@3/states-albers-10m.json")

  /********************************
   * * Draw the map
   ********************************/

  const geoPath = d3.geoPath(usaProjection);
  const usaMap = d3
    .select(".usa-map-container")
    .append("path")
    .datum(usaShapeData)
    .attr("d", geoPath);
}

Map();
