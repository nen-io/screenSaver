import { drawGrid } from "./Grid";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  drawGrid(10);
}

function draw() {}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);

  drawGrid(10);
}

window.setup = setup;
window.draw = draw;
window.windowResized = windowResized;
