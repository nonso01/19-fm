import "./style.css";
import { animate, createDraggable, utils, waapi, stagger } from "animejs";

const log = console.log;
const pickOne = (el) => document.querySelector(el);
const pickAll = (els) => document.querySelectorAll(els);

const swapBtns = pickAll(".div-swap p");
const stacks = pickAll(".stack");

// for the extensions
waapi.animate(".extension .add", {
  translate: `0 -2rem`,
  delay: stagger(100),
  duration: 600,
  loop: true,
  alternate: true,
  ease: "inOut(2)",
});

// createDraggable('.add', {
//     container: '.extension'
// })
