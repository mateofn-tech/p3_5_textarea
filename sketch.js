const squareColor = "#FF00C8";
const squareSize = 200;
const rectWidth = 100; // ancho del rectángulo naranja

function setup() {
  createCanvas(500, 500);
  noStroke();
  rectMode(CORNER);

  textSize(40);
  fill(255);
}

function draw() {
  background(30);

  // Panel izquierdo (rectángulo naranja)
  fill("#FFA500");
  rect(0, 0, rectWidth, height);

  // Cuadrado rosa justo a la derecha del rectángulo naranja
  fill(squareColor);
  rect(rectWidth + 20, 50, squareSize, squareSize); // 20 px de separación

  // Texto dentro del cuadrado rosa
  fill(255);
  text("hola", rectWidth + 40, 110); // Ajustar posición del texto
}
