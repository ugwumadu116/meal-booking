import menuData from '../utils/dummyMenuData';
import MealService from './meal.service';
import Menu from '../models/menu.model';

const MenuService = {
  findAllMenus() {
    return menuData.menus;
  },
  createAMenu(mealId) {
    const date = new Date();
    const today = date.toLocaleString('en-us', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
    const findMeal = MealService.findAMeal(mealId);
    if (findMeal) {
      const menuDate = menuData.menus.find(mymenu => mymenu.date === today);
      if (menuDate) {
        const menuIndex = menuData.menus.indexOf(menuDate);
        menuData.menus[menuIndex].food.push(findMeal);
        return menuData.menus[menuIndex];
      }
      const lastMenu = menuData.menus.length - 1;
      const lastMenuId = menuData.menus[lastMenu].id;
      const newMenuId = lastMenuId + 1;
      const newMenu = new Menu();
      newMenu.id = newMenuId;
      newMenu.date = today;
      newMenu.food.push(findMeal);
      menuData.menus.push(newMenu);
      return newMenu;
    }
    return false;
  },
};
export default MenuService;
