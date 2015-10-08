describe("Plane", function() {
  var plane;

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
  });

  it("should not be landed after take off", function() {
    plane.land();
    plane.take_off();
    expect(plane.isLanded).toBe(false)
  });


  it("should raise error if trying to take off whilst flying", function() {
    expect(function() {plane.take_off(plane);
    }).toThrowError("Plane is already flying");
  });

  it("should raise error if trying to land whilst landed", function() {
    plane.land();
    expect(function() {plane.land(plane);
    }).toThrowError("Plane is already landed");
  });
});
