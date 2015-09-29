function Airport() {
    this.hanger = []
    this.defaultCapacity = 3;
    // this.weather = ['stormy', 'sunny']
    this.isEmpty = true;
};

Airport.prototype.hanger = function() {
  return hanger;
};

Airport.prototype.take_off = function(plane) {
  if (this.hanger.length == 0) {
    throw Error("No planes available.");
  } else
  this.hanger.pop(plane)
};

Airport.prototype.land = function(plane) {
  if (this.hanger.length >= 3) {
    throw Error("Airport is full.");
  } else
  this.hanger.push(plane);
};
