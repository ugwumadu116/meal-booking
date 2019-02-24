"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _meal = _interopRequireDefault(require("./routes/meal.route"));

var _menu = _interopRequireDefault(require("./routes/menu.route"));

var _order = _interopRequireDefault(require("./routes/order.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
var PORT = 3000;
var prefix = '/api/v1';
app.use(_bodyParser.default.json());
app.get('/', function (req, res) {
  res.send('welcome to meal-booking Api');
});
app.use("".concat(prefix, "/meals"), _meal.default);
app.use("".concat(prefix, "/menu"), _menu.default);
app.use("".concat(prefix, "/orders"), _order.default);
app.listen(PORT, function () {
  return console.log('conected');
});
var _default = app;
exports.default = _default;
//# sourceMappingURL=index.js.map