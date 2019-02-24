"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _menu = _interopRequireDefault(require("../controller/menu.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', _menu.default.findAllMenus);
router.post('/', _menu.default.createAMenu);
var _default = router;
exports.default = _default;
//# sourceMappingURL=menu.route.js.map