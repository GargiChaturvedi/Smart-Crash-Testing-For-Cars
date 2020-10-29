var car, wall;
var speed, weight;
var deformation = "Press space to know";

function setup() {
  createCanvas(1500,600);
  car = createSprite(100, 200, 50, 50);
  car.debug = false;
  wall = createSprite(1200, 200, 50, 300);
  wall.debug = false;
  speed = Math.round(random(40, 200));
  weight = Math.round(random(400, 1500));
}

function draw() {
  background("black");
  fill("deeppink");
  textSize(40);
  text("Welcome to GCSO!", 450, 500);
  fill("aqua");
  textSize(20);
  text("Speed: " + speed, 50, 50);
  text("Weight: " + weight, 175, 50);
  text("Deformation: " + deformation, 325, 50);

  if(keyDown("space")) {
    car.velocityX = speed;
  }

  if(wall.x - car.x <= car.width/2 + wall.width/2) {
    deformation = (0.5 * weight * speed * speed)/22500;
  }

  if(deformation < 100) {
    car.shapeColor = "green";
  }

  if(deformation >= 100 && deformation <= 180) {
    car.shapeColor = "yellow";
  }

  if(deformation > 180) {
    car.shapeColor = "red";
  }

  car.collide(wall);

  drawSprites();
}