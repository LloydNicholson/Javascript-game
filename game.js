var canvas;
var canvas_context;
var ball_x = 50;
var ball_speed_x = 8;

window.onload = function() {
  canvas = document.getElementById("game_canvas");
  canvas_context = canvas.getContext("2d");

  var frames_per_second = 30;
  setInterval(function() {
    moveEverything();
    drawEverything();
  }, 1000/frames_per_second);

  console.log("Hello World!");
  console.log("called drawEverything");
}

function moveEverything() {
    ball_x += ball_speed_x;
    if (ball_x > canvas.width) {
      ball_speed_x = -ball_speed_x;
    } else if (ball_x < 0) {
      ball_speed_x = -ball_speed_x;
    }
    console.log(ball_x);
}

function drawEverything() {
  // black canvas area
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  // white paddle
  colorRect(0, 50, 10, 100, 'white');
  // red ball
  colorRect(ball_x, 70, 10, 10, 'red');
}

function colorRect(left_x, top_y, width, height, draw_color) {
  canvas_context.fillStyle = draw_color;
  canvas_context.fillRect(left_x, top_y, width, height);
}
