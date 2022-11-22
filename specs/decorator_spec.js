const assert = require("assert");
const Paint = require("../paint.js");
const Decorator = require("../decorator.js");
const Room = require("../room.js");

describe("decorator", () => {
  let decorator;
  let paint;
  let room;
  beforeEach(function () {
    decorator = new Decorator();
    paint = new Paint(10);
    room = new Room(30);
  });
  it("should start with an empty stock", function () {
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, []);
  });
  it("should be able to add a can", function () {
    decorator.addCan(paint);
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [paint]);
  });
  it("should be able to calculate total litres in stock", function () {
    decorator.addCan(paint);
    decorator.addCan(paint);
    const actual = decorator.calculateLitres();
    assert.strictEqual(actual, 20);
  });
  it("should be able to check if enough paint for room", function () {
    decorator.addCan(paint);
    decorator.addCan(paint);
    decorator.addCan(paint);
    const actual = decorator.checkPaintForRoom(room);
    assert.strictEqual(actual, true);
  });
  it("should be able to paint room", function () {
    decorator.addCan(paint);
    decorator.addCan(paint);
    decorator.addCan(paint);
    decorator.paintRoom(room);
    const actual2 = room.paintable;
    const actual = room.painted;
    assert.strictEqual(actual2, false);
    assert.strictEqual(actual, true);
  });
});
