describe("Airport", function() {
  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it("should be empty to start off with", function() {
    expect(airport.isEmpty).toBe(true);
  });

  it("can instruct a plane to take off", function() {
    airport.hanger.push(plane)
    airport.take_off(plane)
    expect(airport.hanger.length).toEqual(0)
  });

  it("can instruct a plane to land", function() {
    airport.land(plane)
    expect(airport.hanger.length).toEqual(1)
  });

  it("can not land plane when full", function() {
    airport.land(plane)
    airport.land(plane)
    airport.land(plane)
    expect(function() {airport.land(plane);
    }).toThrowError("Airport is full.");
  });

  it(" can not relsease plane when empty", function() {
    expect(function() {airport.take_off(plane);
    }).toThrowError("No planes available.");
  });
});
