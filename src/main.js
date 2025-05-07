import "./style.css";
import {
  animate,
  createDraggable,
  // utils,
  waapi,
  stagger,
  onScroll,
} from "animejs";

const log = console.log;
const ONESEC = 1e3;
const pickOne = (el) => document.querySelector(el);
const pickAll = (els) => document.querySelectorAll(els);

// const swapBtns = pickAll(".div-swap p");
// const stacks = pickAll(".stack");

// createDraggable('.add', {
//     container: '.extension'
// })

(function pageAnimation() {
  // blink the button dot
  animate("nav button.red span", {
    color: ["hsl(0, 94%, 66%)", "hsl(229, 31%, 21%)"],
    duration: ONESEC,
    alternate: true,
    loop: true,
  });

  // drag the first illustration
  createDraggable(".sb-image img", {
    container: ".sec-sb",
    snap: [0, 300],
  });

  // extension animation
  waapi.animate(".extension .add", {
    translate: `0 -2rem`,
    delay: stagger(100),
    duration: 600,
    loop: true,
    alternate: true,
    ease: "inOut(2)",
  });
})();
