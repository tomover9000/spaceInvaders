function EnemyLaser(enemy) {

  this.speed = 3;
  this.length = 16;
  this.hit = false;
  this.damage = 5;

  this.position = createVector(enemy.position.x, enemy.position.y);
  this.velocity = createVector(0, this.speed);
  //console.log(enemy.size);
  this.position.add(enemy.size / 2, enemy.size);

  this.show = function() {
    strokeWeight(4);
    stroke(0, 0, 255);
    line(this.position.x, this.position.y, this.position.x, this.position.y + this.length);
  }

  this.hits = function() {
    if ((this.position.x > ship.position.x - ship.radius && this.position.x < ship.position.x + ship.radius) && (this.position.y + this.length > ship.position.y - ship.radius && this.position.y < ship.position.y + ship.radius)) {
      //console.log("hit");
      this.hit = true;
      ship.health -= this.damage;
    }
  }

  this.update = function() {
    this.position.add(this.velocity);
  }
}
