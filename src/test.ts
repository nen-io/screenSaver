export function test() {
  if (mouseIsPressed) {
    fill(255);
  } else {
    fill(100);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
