export const drawGrid = (gridSize: number) => {
  let spacingX = width / gridSize;
  let spacingY = height / gridSize;

  for (let col = 1; col <= gridSize + 1; col++) {
    for (let row = 1; row <= gridSize + 1; row++) {
      let x = col * spacingX;
      let y = row * spacingY;
      stroke(255);
      strokeWeight(1);
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
};
