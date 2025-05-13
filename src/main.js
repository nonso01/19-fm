import { utils } from "animejs";
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
const LeftOffsetScroll = 1.685;
const NumberJoined = { n: 0 };

const $swap = utils.$(".div-swap p");
const [$clickSwap] = utils.$(".sec-click .scroll");
$swap.forEach(($swap, index) => {
  $swap.onclick = ({ target }) => {
    const { width, left } = target.getBoundingClientRect();

    animate($clickSwap, {
      left: left - width * LeftOffsetScroll,
      // width: [0, width],
      ease: "inExpo",
      duration: ONESEC * 0.4,
    });

    log({ width, left });
  };
});

log($swap);

(function animatePage() {
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

  // animate the joined numbers
  const [$joined] = utils.$(".stay .s span");
  animate(NumberJoined, {
    n: 35_000,
    duration: ONESEC * 5,
    alternate: true,
    loop: true,
    modifier: utils.round(0),
    onRender: () => {
      $joined.innerHTML = NumberJoined.n.toLocaleString("en-US");
    },
  });
})();
