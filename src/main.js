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
const $stacks = utils.$(".stack");

// createDraggable(".stack:not(.stack.hide-stack) img", {
//   container: ".bk-image",
//   scope: [0, 300],
// });

$swap.forEach(($swap, index) => {
  $swap.onclick = ({ target }) => {
    const { width, left } = target.getBoundingClientRect();

    animate($clickSwap, {
      left: left - width * LeftOffsetScroll,
      // width: [0, width],
      ease: "inExpo",
      duration: ONESEC * 0.4,
    });

    $stacks.forEach((stack, $index) => {
      if (index === $index) {
        animate(stack, {
          translateY: "0%",
          opacity: [0, 1],
          duration: ONESEC * 0.3,
          onComplete: () => {
            stack.classList.remove("hide-stack");
          },
        });
      } else {
        animate(stack, {
          translateY: "100%",
          opacity: [1, 0],
          duration: ONESEC,
          onComplete() {
            stack.classList.add("hide-stack");
          },
        });
      }
    });
  };
});

// log(...$stacks);

(function animatePage() {
  // blink the button dot
  animate("nav button.red span", {
    color: ["hsl(0, 94%, 66%)", "hsl(229, 31%, 21%)"],
    duration: ONESEC,
    alternate: true,
    loop: true,
  });

  // drag the first illustration
  createDraggable(".sec-sb img", {
    container: ".sb-image",
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
