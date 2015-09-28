describe("Plane", function() {
  var plane;
  // var airport;

  beforeEach(function() {
    plane = new Plane();
    // song = new Song();
  });

  it("should be flying to start with", function() {
    expect(plane.isFlying).toBe(true);
  });

  it("should not be flying when landed", function() {
    plane.land();
    expect(plane.isFlying).toBe(false)
  });
});
