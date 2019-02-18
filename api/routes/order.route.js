import { Router } from 'express';
import orderController from '../controller/oreder.controller';

const router = Router();

router.get('/', orderController.findAllOrders);
router.get('/:id', orderController.findAnOrder);
router.post('/', orderController.createAnOrder);
router.put('/:id', orderController.updateAnOrder);

export default router;
