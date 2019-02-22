import MenuServices from '../services/menu.service';

const menuController = {
  findAllMenus(req, res) {
    const allMenus = MenuServices.findAllMenus();
    res.status(200).json({
      status: 200,
      menu: allMenus,
    });
  },
  createAMenu(req, res) {
    const { mealId } = req.body;
    const createdMenu = MenuServices.createAMenu(mealId);
    if (createdMenu) {
      res.status(201).json({
        status: 201,
        message: 'menu created',
        data: createdMenu,
      });
    } else {
      res.status(400).json({
        status: 'ERROR',
        error: `meal with id ${mealId} does not exist please add meal`,
      });
    }
  },
};
export default menuController;
