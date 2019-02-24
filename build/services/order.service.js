"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyOrderData = _interopRequireDefault(require("../utils/dummyOrderData"));

var _order = _interopRequireDefault(require("../models/order.model"));

var _meal = _interopRequireDefault(require("./meal.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var orderService = {
  findAllOrders: function findAllOrders() {
    var orders = _dummyOrderData.default.orders.map(function (order) {
      var newOrder = new _order.default();
      var id = order.id,
          status = order.status,
          mealQuantity = order.mealQuantity,
          total = order.total,
          userId = order.userId,
          addressId = order.addressId,
          mealId = order.mealId;
      newOrder.id = id;
      newOrder.status = status;
      newOrder.mealQuantity = mealQuantity;
      newOrder.total = total;
      newOrder.userId = userId;
      newOrder.addressId = addressId;
      newOrder.mealId = mealId;
      return newOrder;
    });

    return orders;
  },
  createAnOrder: function createAnOrder(order) {
    var mealQuantity = order.mealQuantity,
        userId = order.userId,
        addressId = order.addressId,
        mealId = order.mealId;

    var SearchedMeal = _meal.default.findAMeal(mealId);

    var activeOrders = _dummyOrderData.default.orders.find(function (myOrder) {
      return myOrder.status === 'active' && myOrder.userId === userId;
    });

    if (activeOrders) {
      activeOrders.mealId.push(SearchedMeal);
      return activeOrders;
    }

    var mealPrice = SearchedMeal.price;
    var totalPrice = mealPrice * mealQuantity;
    var lastOrder = _dummyOrderData.default.orders.length - 1;
    var lastOrderId = _dummyOrderData.default.orders[lastOrder].id;
    var newOrderId = lastOrderId + 1;
    var newOrder = new _order.default();
    newOrder.id = newOrderId;
    newOrder.status = 'active';
    newOrder.mealQuantity = mealQuantity;
    newOrder.total = totalPrice;
    newOrder.userId = userId;
    newOrder.addressId = addressId;
    newOrder.mealId.push(SearchedMeal);
    newOrder.createdDate = new Date();
    newOrder.updatedDate = new Date();

    _dummyOrderData.default.orders.push(newOrder);

    return newOrder;
  },
  findAnOrder: function findAnOrder(id) {
    var index = parseInt(id, 10);

    var myOrder = _dummyOrderData.default.orders.find(function (order) {
      return order.id === index;
    });

    return myOrder;
  },
  updateAnOrder: function updateAnOrder(id, newOrder) {
    var order = this.findAnOrder(id);

    var index = _dummyOrderData.default.orders.indexOf(order);

    var userId = newOrder.userId,
        addressId = newOrder.addressId,
        status = newOrder.status,
        mealQuantity = newOrder.mealQuantity;

    if (userId === 0) {
      _dummyOrderData.default.orders[index].status = status;
    }

    _dummyOrderData.default.orders[index].addressId = addressId;
    _dummyOrderData.default.orders[index].mealQuantity = mealQuantity;
    _dummyOrderData.default.orders[index].updatedDate = new Date();
    return _dummyOrderData.default.orders[index];
  }
};
var _default = orderService;
exports.default = _default;
//# sourceMappingURL=order.service.js.map