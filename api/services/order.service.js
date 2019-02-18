import orderData from '../utils/dummyOrderData';
import Order from '../models/order.model';

const orderService = {
  findAllOrders() {
    const orders = orderData.orders.map((order) => {
      const newOrder = new Order();
      const {
        id,
        status,
        mealNumber,
        total,
        userId,
        addressId,
        mealId,
        catererId,
      } = order;
      newOrder.id = id;
      newOrder.status = status;
      newOrder.mealNumber = mealNumber;
      newOrder.total = total;
      newOrder.userId = userId;
      newOrder.addressId = addressId;
      newOrder.mealId = mealId;
      newOrder.catererId = catererId;
      return newOrder;
    });
    return orders;
  },

  createAnOrder(order) {
    const newId = orderData.orders.length + 1;
    const newOrder = order;
    newOrder.id = newId;
    newOrder.createdDate = new Date();
    newOrder.updatedDate = new Date();
    orderData.orders.push(newOrder);
    return newOrder;
  },
  findAnOrder(id) {
    const index = parseInt(id, 10);
    const myOrder = orderData.orders.find(order => order.id === index);
    return myOrder;
  },

  updateAnOrder(id, newOrder) {
    const order = this.getSingleOrder(id);
    const index = orderData.orders.indexOf(order);
    const {
      status,
      mealNumber,
      mealId,
      updatedDate,
    } = newOrder;

    orderData.orders[index].status = status;
    orderData.orders[index].mealNumber = mealNumber;
    orderData.orders[index].mealId = mealId;
    orderData.orders[index].updatedAt = updatedDate;

    return orderData.orders[index];
  },
};

export default orderService;
