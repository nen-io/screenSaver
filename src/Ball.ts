import { Color, Vector } from "p5";

export class Ball {
  pos: Vector;
  ballSize: number = 50;
  velocity: Vector = createVector(0, 0);
  color: Color;
  radius: number;

  constructor(pos: Vector) {
    this.pos = pos;
    this.ballSize = random(10, 50);
    this.velocity = createVector(random(-5, 5), random(-5, 5));
    this.color = color(255, random(50), random(255), 180);
    this.radius = this.ballSize / 2;
  }

  hasCollidedWithFrame() {
    return (
      this.pos.x > width - this.radius ||
      this.pos.x < this.radius ||
      this.pos.y > height - this.radius ||
      this.pos.y < this.radius
    );
  }

  hasCollidedWithX() {
    return this.pos.x >= width - this.radius || this.pos.x <= this.radius;
  }

  hasCollidedWithY() {
    return this.pos.y >= height - this.radius || this.pos.y <= this.radius;
  }

  update() {
    if (this.hasCollidedWithX()) {
      this.velocity.x *= -1;
    }

    if (this.hasCollidedWithY()) {
      this.velocity.y *= -1;
    }

    let newPos = this.pos.add(this.velocity);
    // constrain the ball to the window
    this.pos.x = constrain(newPos.x, this.radius, width - this.radius);
    this.pos.y = constrain(newPos.y, this.radius, height - this.radius);

    // this.speed = 0.001;
  }

  draw() {
    this.update();
    fill(this.color);
    noStroke();
    circle(this.pos.x, this.pos.y, this.ballSize);
  }
}
