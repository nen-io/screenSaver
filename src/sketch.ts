import { Ball } from "./Ball";

let balls: Ball[] = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1000; i++) {
    balls.push(
      new Ball(
        createVector(random(windowWidth - 51), random(windowHeight - 51))
      )
    );
  }

  frameRate(60);
}

function draw() {
  background(0);

  balls.forEach((ball) => {
    ball.draw();
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

window.setup = setup;
window.draw = draw;
window.windowResized = windowResized;
