"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _meal = _interopRequireDefault(require("../services/meal.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mealController = {
  findAllMeals: function findAllMeals(req, res) {
    var allMeals = _meal.default.findAllMeals();

    res.status(200).json({
      status: 200,
      data: allMeals
    });
  },
  createAMeal: function createAMeal(req, res) {
    var meal = req.body;
    var _req$body = req.body,
        name = _req$body.name,
        description = _req$body.description,
        price = _req$body.price,
        type = _req$body.type,
        size = _req$body.size;

    if (name && price && size && description && type) {
      var createdMeal = _meal.default.createAMeal(meal);

      res.status(201).json({
        status: 'success',
        message: 'meal created',
        data: createdMeal
      });
    } else {
      res.status(400).json({
        status: 400,
        error: 'Faild all fileds are required'
      });
    }
  },
  findAMeal: function findAMeal(req, res) {
    var mealId = req.params.mealId;
    var id = parseInt(mealId, 10);

    var meal = _meal.default.findAMeal(id);

    if (meal) {
      res.status(200).json({
        data: meal,
        status: 200
      });
    } else {
      res.status(404).json({
        status: 404,
        error: 'That record does not exist'
      });
    }
  },
  updateAMeal: function updateAMeal(req, res) {
    var mealId = req.params.mealId;
    var id = parseInt(mealId, 10);

    var meal = _meal.default.findAMeal(id);

    var newMeal = req.body;

    if (meal) {
      var updateMeal = _meal.default.updateAMeal(id, newMeal);

      res.status(201).json({
        status: 201,
        message: 'meal updated',
        data: updateMeal
      });
    } else {
      res.status(404).json({
        status: 404,
        error: 'That record does not exist'
      });
    }
  },
  removeAMeal: function removeAMeal(req, res) {
    var mealId = req.params.mealId;
    var id = parseInt(mealId, 10);

    var meal = _meal.default.findAMeal(id);

    if (meal) {
      var removeMeal = _meal.default.removeAMeal(id);

      res.status(200).json({
        status: 200,
        message: 'meal removed',
        data: removeMeal
      });
    } else {
      res.status(404).json({
        status: 404,
        error: 'That record does not exist'
      });
    }
  }
};
var _default = mealController;
exports.default = _default;
//# sourceMappingURL=meal.controller.js.map