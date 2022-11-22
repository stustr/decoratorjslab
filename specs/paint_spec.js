const assert = require("assert");
const Paint = require("../paint");

describe("Paint", () => {
  let paint;
  beforeEach(function () {
    paint = new Paint(15);
  });
  it("should have a volume", function () {
    const actual = paint.volume;
    assert.strictEqual(actual, 15);
  });
  it("should be able to check if empty", function () {
    const actual = paint.checkEmpty();
    assert.strictEqual(actual, false);
  });
  it("should be able to empty itself", function () {
    const actual = paint.empty();
    assert.strictEqual(actual, 0);
  });
});
