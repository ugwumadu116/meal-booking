"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _menu = _interopRequireDefault(require("../services/menu.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuController = {
  findAllMenus: function findAllMenus(req, res) {
    var allMenus = _menu.default.findAllMenus();

    res.status(200).json({
      status: 200,
      menu: allMenus
    });
  },
  createAMenu: function createAMenu(req, res) {
    var mealId = req.body.mealId;

    var createdMenu = _menu.default.createAMenu(mealId);

    if (createdMenu) {
      res.status(201).json({
        status: 201,
        message: 'menu created',
        data: createdMenu
      });
    } else {
      res.status(400).json({
        status: 'ERROR',
        error: "meal with id ".concat(mealId, " does not exist please add meal")
      });
    }
  }
};
var _default = menuController;
exports.default = _default;
//# sourceMappingURL=menu.controller.js.map