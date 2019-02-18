import menuData from '../utils/dummyMenuData';
import Menu from '../models/menu.model';

const MenuService = {
  todaysDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    if (dd < 10) {
      dd = 0 + dd;
    }
    if (mm < 10) {
      mm = 0 + mm;
    }
    today = `${dd}/${mm}/${yyyy}`;
    return today;
  },
  findAllMenus() {
    const today = this.todaysDate();
    const menuDate = menuData.menus.find(mymenu => mymenu.date === today);
    let menuResult = '';
    if (!menuDate) {
      menuResult = null;
    } else {
      const menuIndex = menuData.menus.indexOf(menuDate);
      menuResult = menuData.menus[menuIndex];
    }
    return menuResult;
  },
  createAMenu(menu) {
    const today = this.todaysDate();
    const menuDate = menuData.menus.find(mymenu => mymenu.date === today);
    let finalMenu = '';
    if (!menuDate) {
      const lastMenu = menuData.menus.length - 1;
      const lastMenuId = menuData.menus[lastMenu].id;
      const newMenuId = lastMenuId + 1;
      const newMenu = new Menu();
      newMenu.id = newMenuId;
      newMenu.date = today;
      newMenu.food.push(menu);
      menuData.menus.push(newMenu);
      finalMenu = newMenu;
    } else {
      const menuIndex = menuData.menus.indexOf(menuDate);
      menuData.menus[menuIndex].food.push(menu);
      finalMenu = menuData.menus[menuIndex];
    }
    return finalMenu;
  },
  findAMenu(id) {
    const myMenu = menuData.menus.find(menu => menu.id === id);
    return myMenu;
  },

};
export default MenuService;
