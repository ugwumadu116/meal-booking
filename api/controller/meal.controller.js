import MealService from '../services/meal.service';

const mealController = {
  findAllMeals(req, res) {
    const allMeals = MealService.findAllMeals();
    res.status(200).json({
      status: 200,
      data: allMeals,
    });
  },
  createAMeal(req, res) {
    const meal = req.body;
    const {
      name,
      price,
      size,
    } = req.body;
    if (name && price && size) {
      const createdMeal = MealService.createAMeal(meal);
      res.status(201).json({
        message: 'meal created',
        data: createdMeal,
      });
    } else {
      res.status(400).json({
        status: 400,
        error: 'Faild all fileds are required',
      });
    }
  },
  findAMeal(req, res) {
    const { id } = req.params;
    const meal = MealService.findAMeal(id);
    if (meal) {
      res.status(200).json({ meal, status: 200 });
    } else {
      res.status(404).json({ status: 404, error: 'That record does not exist' });
    }
  },
  updateAMeal(req, res) {
    const { id } = req.params;
    const meal = MealService.findAMeal(id);
    if (meal) {
      const updateMeal = MealService.updateAMeal(id);
      res.status(201).json({
        message: 'meal updated',
        data: updateMeal,
      });
    } else {
      res.status(404).json({ status: 404, error: 'That record does not exist' });
    }
  },
  removeAMeal(req, res) {
    const { id } = req.params;
    const meal = MealService.findAMeal(id);
    if (meal) {
      const updateMeal = MealService.removeAMeal(id);
      res.status(200).json({
        message: 'meal removed',
        data: updateMeal,
      });
    } else {
      res.status(404).json({ status: 404, error: 'That record does not exist' });
    }
  },
};

export default mealController;
