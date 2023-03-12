// Set up the bottle and valve
var pos_bx = 225, pos_by =225;
var b_base = 76.2, b_altura = 165.1;
var raise_val = 25.4;
var base_val = 10, altura_val = 5;

// Set up the water
var aguah = b_altura;
var base_area = Math.PI * Math.pow(b_base / 2, 2);
var agua_vd = base_area * aguah;

// Set up the animation parameters
var ti = 0, tf = 50, n = 100;
var dt = (tf - ti) / n;
var t = 0;
var vel, G;

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
  ctx.fillStyle = "blue";
  ctx.fillRect(pos_bx, canvas.height - pos_by - aguah, b_base, aguah);
  ctx.fillRect(pos_bx + b_base, canvas.height - pos_by - raise_val - altura_val, base_val, altura_val);
  
  // Draw the final water level and graph

  t += dt;
  setTimeout(draw, 10);
}

// Set up the canvas
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;

draw();
