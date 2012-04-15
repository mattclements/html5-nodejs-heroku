
var canvas,
    ctx,
    mousePressed = false,
    x = 0,
    y = 0;

window.onload = start;

function start() {
  canvas = document.getElementById("wbCanvas");
  ctx = canvas.getContext("2d");

  canvas.addEventListener("mousemove", onMouseMove, false);
  canvas.addEventListener("mousedown", onMousePress, false);
  canvas.addEventListener("mouseup", onMousePress, false);
}

function onMousePress(e) {
  if(mousePressed) {
    mousePressed = false;
  }
  else {
    ctx.moveTo(x, y);
    mousePressed = true;
  }
}

function onMouseMove(e) {
  if (e.layerX || e.layerX == 0) { // firefox
    x = e.layerX;
    y = e.layerY;
  }
  else if (e.offsetX || e.offsetX == 0) { // opera
    x = e.offsetX;
    y = e.offsetY;
  }
  if(mousePressed) {
    drawLine(x, y);
  }
}

function drawLine(x, y) {
  ctx.lineTo(x, y);
  ctx.stroke();
}

