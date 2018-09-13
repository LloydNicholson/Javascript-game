var canvas;
var canvas_context;
var ball_x = 50;


window.onload = function() {
  console.log("Hello World!");
  console.log(ball_x);
  console.log("called drawEverything");
  canvas = document.getElementById("game_canvas");
  canvas_context = canvas.getContext("2d");

  var frames_per_second = 30;
  setInterval(function() {
    moveEverything();
    drawEverything();
  }, 1000/frames_per_second);
}

function moveEverything() {
    ball_x += 5;
}

function drawEverything() {
  canvas_context.fillStyle = "black";
  canvas_context.fillRect(0, 0, canvas.width, canvas.height);
  canvas_context.fillStyle = "white";
  canvas_context.fillRect(0, 50, 10, 100);
  canvas_context.fillStyle = "red";
  canvas_context.fillRect(ball_x, 70, 10, 10);
}
