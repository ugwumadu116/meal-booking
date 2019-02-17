import menuData from '../utils/dummyMenuData';
import Menu from '../models/menu.model';

const MenuService = {
  findAllMeals() {
    const myMenu = menuData.menus.map((menu) => {
      const newMenu = new Menu();
      const {
        id,
        date,
        food,
      } = menu;
      newMenu.id = id;
      newMenu.date = date;
      newMenu.food = food;
      return newMenu;
    });
    return myMenu;
  },
  createAMenu(menu) {
    const lastMenu = menuData.menus.length - 1;
    const lastMenuId = menuData.menus[lastMenu].id;
    const newMenuId = lastMenuId + 1;
    const newMenu = new Menu();
    const {
      food,
    } = menu;
    newMenu.id = newMenuId;
    newMenu.date = new Date();
    newMenu.food = food;
    menuData.menus.push(newMenu);
    return newMenu;
  },
  findAMenu(id) {
    const myMenu = menuData.menus.find(menu => menu.id === id);
    return myMenu;
  },

};
export default MenuService;
