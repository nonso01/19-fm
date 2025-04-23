import "./style.css";
import { animate } from "animejs";

const log = console.log;
const pickOne = (el) => document.querySelector(el);
const pickAll = (els) => document.querySelectorAll(els);

const swapBtns = pickAll('.div-swap p')
const stacks = pickAll('.stack')

// animate("img", {
//     rotate: 180 *2 ,
//     loop: true,
//     ease: 'inOutExpo',
// });
