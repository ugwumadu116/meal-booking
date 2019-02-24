"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyMealData = _interopRequireDefault(require("../utils/dummyMealData"));

var _meals = _interopRequireDefault(require("../models/meals.model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MealService = {
  findAllMeals: function findAllMeals() {
    var myMeal = _dummyMealData.default.meals.map(function (meal) {
      var newMeal = new _meals.default();
      var id = meal.id,
          name = meal.name,
          description = meal.description,
          price = meal.price,
          size = meal.size,
          type = meal.type;
      newMeal.id = id;
      newMeal.name = name;
      newMeal.description = description;
      newMeal.price = price;
      newMeal.size = size;
      newMeal.type = type;
      return newMeal;
    });

    return myMeal;
  },
  createAMeal: function createAMeal(meal) {
    var lastMeal = _dummyMealData.default.meals.length - 1;
    var lastMealId = _dummyMealData.default.meals[lastMeal].id;
    var newMealId = lastMealId + 1;
    var newMeal = new _meals.default();
    var name = meal.name,
        description = meal.description,
        price = meal.price,
        size = meal.size,
        type = meal.type;
    newMeal.id = newMealId;
    newMeal.name = name;
    newMeal.description = description;
    newMeal.price = price;
    newMeal.size = size;
    newMeal.type = type;

    _dummyMealData.default.meals.push(newMeal);

    return newMeal;
  },
  findAMeal: function findAMeal(id) {
    var myMeal = _dummyMealData.default.meals.find(function (meal) {
      return meal.id === id;
    });

    return myMeal;
  },
  updateAMeal: function updateAMeal(id, newMeal) {
    var myMeal = _dummyMealData.default.meals.find(function (meal) {
      return meal.id === id;
    });

    var mealIndex = _dummyMealData.default.meals.indexOf(myMeal);

    var name = newMeal.name,
        description = newMeal.description,
        price = newMeal.price,
        size = newMeal.size,
        type = newMeal.type;
    _dummyMealData.default.meals[mealIndex].name = name;
    _dummyMealData.default.meals[mealIndex].description = description;
    _dummyMealData.default.meals[mealIndex].price = price;
    _dummyMealData.default.meals[mealIndex].size = size;
    _dummyMealData.default.meals[mealIndex].type = type;
    return _dummyMealData.default.meals[mealIndex];
  },
  removeAMeal: function removeAMeal(id) {
    var myMeal = _dummyMealData.default.meals.find(function (meal) {
      return meal.id === id;
    });

    var mealIndex = _dummyMealData.default.meals.indexOf(myMeal);

    var newMeal = _dummyMealData.default.meals.splice(mealIndex, 1);

    return newMeal;
  }
};
var _default = MealService;
exports.default = _default;
//# sourceMappingURL=meal.service.js.map