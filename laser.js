function Laser(ship) {
  this.speed = -5;
  this.length = 16;
  this.hit = false;
  this.damage = 20;
  this.acceleration = -0.1;

  this.position = createVector(ship.position.x, ship.position.y);
  this.velocity = createVector(0, this.speed);
  this.acceleration = createVector(0, this.acceleration);
  this.position.add(0, -ship.radius);



  this.show = function() {
    strokeWeight(4);
    stroke(255, 0, 0);
    //console.log("DRAW LINE");
    line(this.position.x, this.position.y, this.position.x, this.position.y - this.length);
  }

  this.hits = function() {
    for (var i = 0; i < enemies.length; i++) {
      if ((this.position.x > enemies[i].position.x && this.position.x < enemies[i].position.x + enemies[i].size) && (this.position.y - this.length < enemies[i].position.y + enemies[i].size && this.position.y > enemies[i].position.y)) {
        this.hit = true;
        enemies[i].health -= this.damage;
      }
    }
  }

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }

}
