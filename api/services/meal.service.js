import mealData from '../utils/dummyMealData';
import Meal from '../models/meals.model';

const MealService = {
  findAllMeals() {
    const myMeal = mealData.meals.map((meal) => {
      const newMeal = new Meal();
      const {
        id,
        name,
        description,
        price,
        size,
        type,
      } = meal;
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
  createAMeal(meal) {
    const lastMeal = mealData.meals.length - 1;
    const lastMealId = mealData.meals[lastMeal].id;
    const newMealId = lastMealId + 1;
    const newMeal = new Meal();
    const {
      name,
      description,
      price,
      size,
      type,
    } = meal;
    newMeal.id = newMealId;
    newMeal.name = name;
    newMeal.description = description;
    newMeal.price = price;
    newMeal.size = size;
    newMeal.type = type;
    mealData.meals.push(newMeal);
    return newMeal;
  },
  findAMeal(id) {
    const myMeal = mealData.meals.find(meal => meal.id === id);
    return myMeal;
  },
  updateAMeal(id, newMeal) {
    const myMeal = mealData.meals.find(meal => meal.id === id);
    const mealIndex = mealData.meals.indexOf(myMeal);
    const {
      name,
      description,
      price,
      size,
      type,
    } = newMeal;
    mealData.meals[mealIndex].name = name;
    mealData.meals[mealIndex].description = description;
    mealData.meals[mealIndex].price = price;
    mealData.meals[mealIndex].size = size;
    mealData.meals[mealIndex].type = type;
    return mealData.meals[mealIndex];
  },
  removeAMeal(id) {
    const myMeal = mealData.meals.find(meal => meal.id === id);
    const mealIndex = mealData.meals.indexOf(myMeal);
    const newMeal = mealData.meals.splice(mealIndex, 1);
    return newMeal;
  },

};
export default MealService;
