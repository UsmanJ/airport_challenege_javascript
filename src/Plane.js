function Plane() {
    this.isFlying = true;
    this.isLanded = false;
};

Plane.prototype.land = function() {
  if (this.isFlying === true) {
    this.isFlying = false;
    this.isLanded = true;
  } else {
    throw Error("Plane is already landed");
  }
};

Plane.prototype.take_off =function() {
  if (this.isFlying === false) {
    this.isFlying = true;
    this.isLanded = false;
  } else {
    throw Error("Plane is already flying");
  }
};
