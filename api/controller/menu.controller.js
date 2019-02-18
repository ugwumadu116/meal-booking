import MenuServices from '../services/menu.service';

const menuController = {
  findAllMenus(req, res) {
    const allMenus = MenuServices.findAllMenus();
    if (allMenus) {
      res.status(200).json({
        status: 200,
        menu: allMenus,
      });
    } else {
      res.status(404).json({ status: 404, error: 'That record does not exist' });
    }

  },
  createAMenu(req, res) {
    const createdMenu = MenuServices.createAMenu(req.body);
    res.status(200).json({
      status: 200,
      menu: createdMenu,
    });
  },
};
export default menuController;
