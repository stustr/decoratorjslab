const Paint = require("./paint.js");

const Decorator = function () {
  this.stock = [];
};

Decorator.prototype.addCan = function (can) {
  this.stock.push(can);
};

Decorator.prototype.calculateLitres = function () {
  let volume = 0;
  for (let i = 0; i < this.stock.length; i++) {
    volume += this.stock[i].volume;
  }
  return volume;
};

Decorator.prototype.checkPaintForRoom = function (room) {
  if (room.area <= this.calculateLitres()) {
    return true;
  } else {
    return false;
  }
};

Decorator.prototype.paintRoom = function (room) {
  if (this.checkPaintForRoom(room) === true) {
    room.painted = true;
    room.paintable = false;
  }
  return room.painted, room.paintable;
};

module.exports = Decorator;
