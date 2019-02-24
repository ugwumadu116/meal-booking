"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _order = _interopRequireDefault(require("../services/order.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orderController = {
  findAllOrders: function findAllOrders(req, res) {
    var orders = _order.default.findAllOrders();

    return res.json({
      status: 'success',
      data: orders
    }).status(200);
  },
  findAnOrder: function findAnOrder(req, res) {
    var id = req.params.id;

    var order = _order.default.findAnOrder(id);

    if (!order) {
      return res.status(404).send({
        status: 'error',
        error: 'order does not exist'
      });
    }

    return res.json({
      status: 'success',
      data: order
    }).status(200);
  },
  createAnOrder: function createAnOrder(req, res) {
    var newOrder = req.body;
    var _req$body = req.body,
        userId = _req$body.userId,
        mealQuantity = _req$body.mealQuantity,
        price = _req$body.price,
        addressId = _req$body.addressId,
        mealId = _req$body.mealId;

    if (userId && price && mealQuantity && addressId && mealId) {
      var createdOrder = _order.default.createAnOrder(newOrder);

      res.status(201).json({
        status: 201,
        data: createdOrder
      });
    } else {
      res.status(400).json({
        status: 400,
        error: 'Faild all fileds are required'
      });
    }
  },
  updateAnOrder: function updateAnOrder(req, res) {
    var id = req.params.id;
    var newOrder = req.body;
    var _req$body2 = req.body,
        userId = _req$body2.userId,
        mealQuantity = _req$body2.mealQuantity,
        price = _req$body2.price,
        addressId = _req$body2.addressId,
        mealId = _req$body2.mealId;

    if (userId && price && mealQuantity && addressId && mealId) {
      var order = _order.default.findAnOrder(id);

      if (!order) {
        res.status(404).send({
          status: 'error',
          message: 'meal not found'
        });
      }

      var updatedOrder = _order.default.updateAnOrder(id, newOrder);

      res.status(201).json({
        status: 201,
        data: updatedOrder
      });
    } else {
      res.status(400).json({
        status: 400,
        error: 'Faild all fileds are required'
      });
    }
  }
};
var _default = orderController;
exports.default = _default;
//# sourceMappingURL=order.controller.js.map