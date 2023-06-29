import { test } from "./test";

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  test();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

window.setup = setup;
window.draw = draw;
window.windowResized = windowResized;
