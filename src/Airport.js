function Airport() {
    this.hanger = []
    this.isEmpty = true;
};

Airport.prototype.hanger = function() {
  return hanger;
};

Airport.prototype.take_off = function(plane) {
  this.hanger.pop(plane)
};

Airport.prototype.land = function(plane) {
  this.hanger.push(plane)
};
