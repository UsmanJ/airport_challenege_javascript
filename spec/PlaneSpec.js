describe("Plane", function() {
  var plane;
  // var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it("should be flying to start with", function() {
    expect(plane.isFlying).toBe(true);
  });

  it("should not be flying when landed", function() {
    plane.land();
    expect(plane.isFlying).toBe(false)
  });

  it("should be flying after take off", function() {
    plane.land();
    plane.take_off();
    expect(plane.isFlying).toBe(true)
  })
});
