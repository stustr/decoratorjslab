const assert = require("assert");
const Room = require("../room.js");

describe("Room", () => {
  let room;
  beforeEach(function () {
    room = new Room(30);
  });
  it("should have an area", function () {
    const actual = room.area;
    assert.strictEqual(actual, 30);
  });
  it("should start not painted", function () {
    const actual = room.painted;
    assert.strictEqual(actual, false);
  });
  it("should start paintable", function () {
    const actual = room.paintable;
    assert.strictEqual(actual, true);
  });
});
