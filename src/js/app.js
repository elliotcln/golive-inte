import simpleParallax from "simple-parallax-js";
import Splide from "@splidejs/splide";
import Splitting from "splitting";
import anime from "animejs";

// const shapeCircle = document.querySelectorAll(".shape.circle--green");
// new simpleParallax(shapeCircle, {
//   orientation: "down left",
//   delay: 0.2,
// });
// const shapetriangle = document.querySelectorAll(".shape.triangle--blue");
// new simpleParallax(shapetriangle, {
//   orientation: "up left",
//   delay: 0.2,
// });

anime({
  targets: ".shape.circle--green",
  keyframes: [
    { translateX: 150 },
    { translateY: 40 },
    { translateX: 120 },
    { translateX: -100 },
  ],
  easing: "easeOutElastic(1, .8)",
  duration: 4000,
  loop: true,
});
anime({
  targets: ".shape.triangle--blue",
  keyframes: [
    { translateX: 150 },
    { translateY: 40 },
    { translateX: 120 },
    { translateX: -100 },
  ],
  easing: "easeOutElastic(1, .8)",
  duration: 4000,
  loop: true,
  direction: "reverse",
});

new Splide(".splide.hp-carousel", {
  arrows: false,
  speed: 1000,
}).mount();

new Splide(".splide.carousel-refs", {
  pagination: false,
  perPage: 1,
  speed: 1000,
  mediaQuery: "min",
  breakpoints: {
    768: {
      perPage: 2,
      gap: "3rem",
    },
    992: {
      perPage: 3,
      gap: "4rem",
    },
  },
}).mount();

document.addEventListener("DOMContentLoaded", () => {
  // const lines = document.querySelectorAll(".lines");
  // lines.forEach((line) => {
  //   const tl = line.innerText;
  //   let sl = tl.split(" ");
  //   let linesArray = [];
  //   var n = 0;
  //   do {
  //     sl.splice(n + 3);
  //     linesArray[n] = sl.join(" ");
  //     n = n + 1;
  //     console.log(sl.length);
  //     console.log(linesArray);
  //   } while (sl.length == 0);
  // });

  // forms toggle
  let contactButtons = document.querySelectorAll(
    ".contact-forms__buttons button, .js-form-actions__back"
  );
  contactButtons.forEach((e) => {
    e.addEventListener("click", (e) => {
      e.preventDefault();
      let target = e.currentTarget;
      let isBack = false;
      if (target.classList.contains("js-form-actions__back")) {
        isBack = true;
      }
      toggle_forms_footer(target, isBack);
    });
  });

  function toggle_forms_footer(target, isBack = false) {
    console.log(target);
    console.log(isBack);
    let buttons_container = document.querySelector(".contact-forms__buttons");
    let forms_container = document.querySelector(".contact-forms__container");

    if (isBack) {
      buttons_container.classList.remove("hidden");
      forms_container.classList.add("hidden");
    } else {
      buttons_container.classList.add("hidden");
      forms_container.classList.remove("hidden");
    }
  }
});
