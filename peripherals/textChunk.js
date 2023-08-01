import { dimensions } from "../utility.js";
function textChunk() {
  let index;
  const yearList = [
    2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
  ];

  let tl = gsap.timeline();

  ScrollTrigger.create({
    trigger: "#bubble-map",
    markers: true,
    start: "top top",
    end: `+=${dimensions.height}px`,
    scrub: true,
    onEnter: () => {
      document
        .getElementById("bubble-map-text-chunks")
        .classList.add("is-active");
    },
    onUpdate: (sc) => {
      index = parseInt(Math.round(sc.progress * 10));

      d3.select("#bubble-map-text-chunks h4").text(yearList[index]);

      if (yearList[index] === 2008) {
        document
          .querySelector(".bubble-map-blurb-0")
          .classList.add("is-visible");
        document
          .querySelector(".bubble-map-blurb-1")
          .classList.remove("is-visible");
      } else if (yearList[index] === 2011) {
        document
          .querySelector(".bubble-map-blurb-0")
          .classList.remove("is-visible");
        document
          .querySelector(".bubble-map-blurb-1")
          .classList.add("is-visible");
        document
          .querySelector(".bubble-map-blurb-2")
          .classList.remove("is-visible");
      } else if (yearList[index] === 2016) {
        document
          .querySelector(".bubble-map-blurb-1")
          .classList.remove("is-visible");
        document
          .querySelector(".bubble-map-blurb-2")
          .classList.add("is-visible");
        document
          .querySelector(".bubble-map-blurb-3")
          .classList.remove("is-visible");
      } else if (yearList[index] > 2016) {
        document
          .querySelector(".bubble-map-blurb-2")
          .classList.remove("is-visible");
        document
          .querySelector(".bubble-map-blurb-3")
          .classList.add("is-visible");
      }
    },
  });
}

textChunk();
