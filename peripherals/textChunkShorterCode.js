import { dimensions } from "../utility.js";
function textChunk() {
  const startYear = 2008;
  const endYear = 2018;

  const yearToBlurbIndex = {
    2008: 0,
    2009: 0,
    2010: 0,
    2011: 1,
    2012: 1,
    2013: 1,
    2014: 1,
    2015: 2,
    2016: 2,
    2017: 3,
    2018: 3,
  };

  let prevBlurbIndex = 0;

  // Update the visibility of the blurbs.
  function updateVisibleBlurb(newBlurbIndex) {
    document.querySelector(`.bubble-map-blurb-${prevBlurbIndex}`).classList.remove("is-visible");
    document.querySelector(`.bubble-map-blurb-${newBlurbIndex}`).classList.add("is-visible");
    prevBlurbIndex = newBlurbIndex;
  }

  let tl = gsap.timeline();

  ScrollTrigger.create({
    trigger: "#bubble-map",
    markers: true,
    start: "top top",
    end: `+=${dimensions.height}px`,
    scrub: true,
    // toggleClass: {targets: ".bubble-map-blurb", className: "is-active"}
    onEnter: () => {
      document.getElementById("bubble-map-text-chunks").classList.add("is-active");
    },
    onUpdate: (sc) => {
      let year = Math.round(sc.progress * (endYear - startYear)) + startYear;
      let newBlurbIndex = yearToBlurbIndex[year];

      if (newBlurbIndex !== prevBlurbIndex) {
        d3.select("#bubble-map-text-chunks h4").text(year);
        updateVisibleBlurb(newBlurbIndex);
      }
    },
  });
}

textChunk();
