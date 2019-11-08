function Enemy(x, y) {

  this.size = 50;
  this.enemyLasers = [];
  this.isOffscreen = false;
  this.health = 255;

  this.position = createVector(x, y);
  this.velocity = createVector(0, 0.5);

  this.show = function() {
    fill(255, this.health, this.health);
    noStroke();
    rect(this.position.x, this.position.y, this.size, this.size);
  }

  this.update = function() {
    if (this.position.x < 0 || this.position.x > width || this.position.y < 0 || this.position.y > height) {
      this.isOffscreen = true;
    }
    this.position.add(this.velocity);
  }

  this.shoot = function() {
    this.enemyLasers.push(new EnemyLaser(this));
  }

  this.updateLasers = function() {
    //  console.log(this.enemyLasers.length);
    for (var i = 0; i < this.enemyLasers.length; i++) {
      this.enemyLasers[i].update();
      this.enemyLasers[i].show();
      this.enemyLasers[i].hits();
      if (this.enemyLasers[i].position.y > height || this.enemyLasers[i].hit) {
        this.enemyLasers.splice(i, 1);
      }
    }
  }

}
