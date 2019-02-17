import express from 'express';
import MealController from '../controller/meal.controller';

const router = express.Router();

router.get('/', MealController.findAllMeals);

router.post('/', MealController.createAMeal);

router.get('/:mealId', MealController.findAMeal);

router.put('/:mealId', MealController.updateAMeal);

router.delete('/:mealId', MealController.removeAMeal);

export default router;
