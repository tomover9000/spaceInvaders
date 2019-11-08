function HealthPack(x, y) {

  this.destroy = false;
  this.radius = 20;
  this.health = 20;
  this.position = createVector(x, y);


  this.show = function() {
    if (!this.destroy) {
      noStroke();
      fill(0, 255, 0);
      ellipse(this.position.x, this.position.y, this.radius, this.radius);
      fill(255);
      stroke(0);
      textSize(14);
      text(this.health, this.position.x, this.position.y);

    }
  }

  this.update = function() {
    if (!this.destroy) {
      if (frameCount % 60 == 0) {
        this.health--;
        if (this.health == 0) {
          this.destroy = true;
        }
      }
      if (dist(ship.position.x, ship.position.y, this.position.x, this.position.y) <= this.radius + ship.radius) {
        ship.health += this.health;
        this.destroy = true;
      }
    }
  }
}
