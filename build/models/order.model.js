"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Order = function Order() {
  _classCallCheck(this, Order);

  this.id = null;
  this.status = 'active';
  this.mealQuantity = null;
  this.total = null;
  this.userId = null;
  this.addressId = null;
  this.mealId = [];
  this.createdDate = new Date();
  this.updatedDate = new Date();
};

var _default = Order;
exports.default = _default;
//# sourceMappingURL=order.model.js.map