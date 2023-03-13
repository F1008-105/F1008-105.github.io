// Set up the bottle and valve

let pos_bx = 225,
  pos_by = 225;
let b_base = 76.2,
  b_altura = 165.1;
let raise_val = 25.4;
let base_val = 10,
  altura_val = 5;

// Set up the water
let aguah = b_altura;
let base_area = Math.PI * Math.pow(b_base / 2, 2);
let agua_vd = base_area * aguah;

// Set up the animation parameters
let ti = 0,
  tf = 50,
  n = 100;
let dt = (tf - ti) / n;
let t = 0;
let vel, G;

function draw() {
  // Calculate the new water level and velocity
  if (aguah > raise_val + altura_val) {
    vel = Math.sqrt(2 * 9.8 * aguah);
    G = vel * dt * Math.pow(altura_val / 2, 2) * Math.PI;
    agua_vd -= G;
    aguah = agua_vd / base_area;
  }
  // Clear the screen and draw the objects
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#99bbff";
  ctx.fillRect(pos_bx, canvas.height - pos_by - aguah, b_base, aguah);

  // Draw the valve
  ctx.fillRect(
    pos_bx + b_base,
    canvas.height - pos_by - raise_val - altura_val,
    base_val,
    altura_val
  );

  // contorno
  ctx.strokeRect(
    pos_bx + b_base,
    canvas.height - pos_by - raise_val - altura_val,
    base_val,
    altura_val
  );

  ctx.strokeRect(pos_bx, 110, b_base, b_altura);

  // Draw the final water level and graph

  t += dt;
  setTimeout(draw, 10);
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const title = document.getElementById("title");


const CANVAS_WIDTH = 500;
const CANVAS_HEIGHT = 500;
canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

draw();
