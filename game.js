var canvas;
var canvas_context;

window.onload = function() {
  console.log("Hello World!");
  canvas = document.getElementById("game_canvas");
  canvas_context = canvas.getContext("2d");
  canvas_context.fillStyle = "black";
  canvas_context.fillRect(0, 0, canvas.width, canvas.height);
}
