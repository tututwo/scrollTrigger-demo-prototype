import { data } from "../data/locationDataValue.js";
import { dimensions, usaProjection } from "../utility.js";

function bubbleChart() {
  let index = 10;
  const rScale = d3
    .scalePow()
    .domain([0, 500000000])
    .range([0, dimensions.width / 12])
    .exponent(0.5);

  const cities = d3
    .select(".bubbles-container")
    .selectAll("g")
    .data(data)
    .join("g");
  cities.attr("transform", (d) => {
    let c = usaProjection(d.coords);
    return "translate(" + c[0] + "," + c[1] + ")";
  });
  const bubbles = cities
    .append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", (d) => {
      return rScale(d.data[index].total);
    });
  
}
bubbleChart();
