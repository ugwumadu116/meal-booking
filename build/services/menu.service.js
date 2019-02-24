"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyMenuData = _interopRequireDefault(require("../utils/dummyMenuData"));

var _meal = _interopRequireDefault(require("./meal.service"));

var _menu = _interopRequireDefault(require("../models/menu.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuService = {
  findAllMenus: function findAllMenus() {
    return _dummyMenuData.default.menus;
  },
  createAMenu: function createAMenu(mealId) {
    var date = new Date();
    var today = date.toLocaleString('en-us', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

    var findMeal = _meal.default.findAMeal(mealId);

    if (findMeal) {
      var menuDate = _dummyMenuData.default.menus.find(function (mymenu) {
        return mymenu.date === today;
      });

      if (menuDate) {
        var menuIndex = _dummyMenuData.default.menus.indexOf(menuDate);

        _dummyMenuData.default.menus[menuIndex].food.push(findMeal);

        return _dummyMenuData.default.menus[menuIndex];
      }

      var lastMenu = _dummyMenuData.default.menus.length - 1;
      var lastMenuId = _dummyMenuData.default.menus[lastMenu].id;
      var newMenuId = lastMenuId + 1;
      var newMenu = new _menu.default();
      newMenu.id = newMenuId;
      newMenu.date = today;
      newMenu.food.push(findMeal);

      _dummyMenuData.default.menus.push(newMenu);

      return newMenu;
    }

    return false;
  }
};
var _default = MenuService;
exports.default = _default;
//# sourceMappingURL=menu.service.js.map