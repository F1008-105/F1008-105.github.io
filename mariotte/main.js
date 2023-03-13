const canv = document.getElementById("canvas");
const slider = document.getElementById("slider");
const slider_text = document.getElementById("slider-text");
const speed_slider = document.getElementById("speed-slider");
const speed_description = document.getElementById("speed-description");
const restart = document.getElementById("restart");
const stop_button = document.getElementById("stop");

slider_text.style.display = "none";
slider.style.display = "none";
speed_slider.style.display = "none";
speed_description.style.display = "none";
restart.style.display = "none";
stop_button.style.display = "none";
canv.style.border = "none";

const startButton = document.getElementById("start-button");

startButton.addEventListener("click", function () {
  slider_text.style.display = "block";
  const canvas = document.getElementById("canvas");
  canvas.style.border = "3px solid black";
  slider.style.display = "block";
  startButton.style.display = "none";
  speed_slider.style.display = "block";
  speed_description.style.display = "block";
  restart.style.display = "block";
  stop_button.style.display = "block";

  // Set the dimensions of the canvas
  const CANVAS_WIDTH = 500;
  const CANVAS_HEIGHT = 500;
  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  // Create the drawing context
  const ctx = canvas.getContext("2d");

  // Define colors
  const BLUE = "#99bbff";
  const BLACK = "#000000";
  const WHITE = "#ffffff";

  const ORIGINAL_HEIGHT = 150;
  const ORIGINAL_WIDTH = 100;

  // Set the starting position of the square
  let square_x = (CANVAS_WIDTH - 50) / 2;
  let square_y = (CANVAS_HEIGHT - 50) / 2;
  let square_width = ORIGINAL_WIDTH;
  let square_height = ORIGINAL_HEIGHT;

  let valv_x = square_x * 1.44;
  let valv_y = square_y;
  let valv_height = 10;
  let valv_width = 20;

  let container_width = square_width;
  let container_height = square_height;

  let start_time = Date.now();
  let running = true;

  let flow = true;

  restart.addEventListener("click", function () {
    square_height = ORIGINAL_HEIGHT; // reset the height of the square
  });

  stop_button.addEventListener("click", function () {
    flow = !flow;
    stop_button.style.backgroundColor = flow ? "#f8df85" : "#f7633e"; // if flow then normal color, if not then red
  });
  function mainLoop() {
    // Calculate the elapsed time since the start of the loop
    const elapsed_time = (Date.now() - start_time) / 1000;

    // Change the size of the square every second
    if (elapsed_time >= 3.01 - speed_slider.value) {
      start_time = Date.now();

      // Make the square smaller
      if (square_height >= 45 && slider.value > 1 && flow == true) {
        square_height -= 2 * 1;
        console.log(square_height);
      }
    }

    // Clear the screen
    ctx.fillStyle = WHITE;
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw the square
    ctx.fillStyle = BLUE;
    ctx.fillRect(
      square_x,
      square_y + 50 - square_height,
      square_width,
      square_height
    );

    // Draw the container
    ctx.strokeStyle = BLACK;
    ctx.lineWidth = 2;
    ctx.strokeRect(
      square_x,
      square_y + 50 - container_height,
      container_width,
      container_height
    );

    ctx.strokeRect(
      // popote
      square_x + 40,
      square_y + 30 - container_height * slider.value,
      valv_height * 1.1,
      container_height * 1.1
    );

    // Draw the valve
    ctx.strokeRect(valv_x, valv_y, valv_width, valv_height);

    if (running) {
      requestAnimationFrame(mainLoop);
    }
  }

  mainLoop();
});
