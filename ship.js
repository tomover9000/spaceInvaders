function Ship(a, b) {
  this.radius = 26;
  var initialHealth = 300;
  this.health = initialHealth;
  this.lasers = [];

  this.position = createVector(a, b);
  this.velocity = createVector(0, 0);

  this.show = function() {
    fill(255 - this.health, this.health, 0);
    noStroke();
    ellipse(this.position.x, this.position.y, this.radius * 2, this.radius * 2);
    textSize(14);
    fill(255);
    stroke(0);
    text(this.health, this.position.x, this.position.y);
  }

  this.update = function() {
    if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
      this.position.set(mouseX, mouseY);
    }
  }

  this.shoot = function() {
    this.lasers.push(new Laser(this));
  }

  this.deleteLasers = function() {
    this.lasers.splice(0, this.lasers.length);
  }

  this.updateLasers = function() {
    for (var i = 0; i < this.lasers.length; i++) {
      this.lasers[i].update();
      this.lasers[i].show();
      this.lasers[i].hits();
      //console.log(this.lasers.length);
      if (this.lasers[i].position.y < 0 || this.lasers[i].hit) {
        //console.log("splice");
        this.lasers.splice(i, 1);
      }
    }
  }

  this.regenerate = function() {
    this.health = initialHealth;
  }
}
