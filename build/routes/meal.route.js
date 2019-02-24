"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _meal = _interopRequireDefault(require("../controller/meal.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', _meal.default.findAllMeals);
router.post('/', _meal.default.createAMeal);
router.get('/:mealId', _meal.default.findAMeal);
router.put('/:mealId', _meal.default.updateAMeal);
router.delete('/:mealId', _meal.default.removeAMeal);
var _default = router;
exports.default = _default;
//# sourceMappingURL=meal.route.js.map