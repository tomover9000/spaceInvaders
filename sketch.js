var ship;
var enemies = [];
var lose = false;
var healthPack;
var score = 0;


function setup() {
  createCanvas(1200, 700);
  frameRate(60);
  ship = new Ship(width / 2, 600);
  enemies.push(new Enemy(random(width), 0));
  smooth();
}

function draw() {
  background(51);
  fill(235);
  stroke(0);
  textSize(20);
  text(score, 5, 20);
  if (ship.health > 0) {

    if (healthPack != undefined) {
      healthPack.update();
      healthPack.show();
    }
    if (frameCount % 10 == 0) {
      ship.shoot();
    }

    if (frameCount % 600 == 0) {
      healthPack = new HealthPack(random(width), random(height));
    }

    ship.show();
    ship.update();
    ship.updateLasers();
    updateEnemies();
    if (enemies.length < 4) {
      enemies.push(new Enemy(random(50, width - 50), 0));
    }
  } else {
    textSize(32);
    text("Loser", width / 2, height / 2);
  }
}

function mouseClicked() {
  //ship.shoot();
}

function keyTyped() {
  if (key === "r") {
    enemies.splice(0, enemies.length);
    ship.deleteLasers();
    ship.regenerate();
    score = 0;
  }
}

function updateEnemies() {
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].update();
    enemies[i].updateLasers();
    enemies[i].show();
    if (random(100) < 3) {
      enemies[i].shoot();
    }

    if (enemies[i].isOffscreen || enemies[i].health <= 0) {
      //console.log("spliced");
      if (enemies[i].health <= 0) {
        score += 5;
      } else {
        ship.health -= 15;
      }

      enemies.splice(i, 1);
    }
  }
}
