import { stateLabels } from "../data/state.js";
import { usaProjection } from "../utility.js";
function StateLabel() {
  let stateLabelSelection = d3
    .select(".state-label-container")
    .selectAll("text")
    .data(stateLabels)
    .enter()
    .append("text")
    .text((d) => d[1])
    .attr("transform", (d) => {
      let c = usaProjection([d[2], d[3]]);
      return "translate(" + c[0] + "," + c[1] + ")";
    })
    .attr("opacity", 0);
   



 
}
StateLabel();
