import orderService from '../services/order.service';

const orderController = {
  findAllOrders(req, res) {
    const orders = orderService.findAllOrders();
    return res
      .json({
        status: 'success',
        data: orders,
      })
      .status(200);
  },

  findAnOrder(req, res) {
    const { id } = req.params;
    const order = orderService.findAnOrder(id);

    if (!order) {
      return res
        .status(404)
        .send({ status: 'error', error: 'order does not exist' });
    }

    return res
      .json({
        status: 'success',
        data: order,
      })
      .status(200);
  },

  createAnOrder(req, res) {
    const newOrder = req.body;
    const {
      userId,
      mealQuantity,
      price,
      addressId,
      mealId,
    } = req.body;
    if (userId && price && mealQuantity && addressId && mealId) {
      const createdOrder = orderService.createAnOrder(newOrder);
      res.status(201).json({
        status: 201,
        data: createdOrder,
      });
    } else {
      res.status(400).json({
        status: 400,
        error: 'Faild all fileds are required',
      });
    }
  },

  updateAnOrder(req, res) {
    const { id } = req.params;
    const newOrder = req.body;
    const {
      userId,
      mealQuantity,
      price,
      addressId,
      mealId,
    } = req.body;
    if (userId && price && mealQuantity && addressId && mealId) {
      const order = orderService.findAnOrder(id);
      if (!order) {
        res.status(404).send({ status: 'error', message: 'meal not found' });
      }
      const updatedOrder = orderService.updateAnOrder(id, newOrder);
      res.status(201).json({
        status: 201,
        data: updatedOrder,
      });
    } else {
      res.status(400).json({
        status: 400,
        error: 'Faild all fileds are required',
      });
    }
  },
};

export default orderController;
