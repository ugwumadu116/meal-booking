import express from 'express';
import MenuController from '../controller/menu.controller';

const router = express.Router();
router.get('/', MenuController.findAllMenus);

router.post('/', MenuController.createAMenu);
export default router;
