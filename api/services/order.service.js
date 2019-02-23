import orderData from '../utils/dummyOrderData';
import Order from '../models/order.model';
import MealService from './meal.service';

const orderService = {
  findAllOrders() {
    const orders = orderData.orders.map((order) => {
      const newOrder = new Order();
      const {
        id,
        status,
        mealQuantity,
        total,
        userId,
        addressId,
        mealId,
      } = order;
      newOrder.id = id;
      newOrder.status = status;
      newOrder.mealQuantity = mealQuantity;
      newOrder.total = total;
      newOrder.userId = userId;
      newOrder.addressId = addressId;
      newOrder.mealId = mealId;
      return newOrder;
    });
    return orders;
  },

  createAnOrder(order) {
    const {
      mealQuantity,
      userId,
      addressId,
      mealId,
    } = order;
    const SearchedMeal = MealService.findAMeal(mealId);
    const activeOrders = orderData.orders.find(myOrder => myOrder.status === 'active' && myOrder.userId === userId);
    if (activeOrders) {
      activeOrders.mealId.push(SearchedMeal);
      return activeOrders;
    }

    const { price: mealPrice } = SearchedMeal;
    const totalPrice = mealPrice * mealQuantity;

    const lastOrder = orderData.orders.length - 1;
    const lastOrderId = orderData.orders[lastOrder].id;
    const newOrderId = lastOrderId + 1;

    const newOrder = new Order();
    newOrder.id = newOrderId;
    newOrder.status = 'active';
    newOrder.mealQuantity = mealQuantity;
    newOrder.total = totalPrice;
    newOrder.userId = userId;
    newOrder.addressId = addressId;
    newOrder.mealId.push(SearchedMeal);
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
    const order = this.findAnOrder(id);
    const index = orderData.orders.indexOf(order);
    const {
      userId,
      addressId,
      status,
      mealQuantity,
    } = newOrder;
    if (userId === 0) {
      orderData.orders[index].status = status;
    }
    orderData.orders[index].addressId = addressId;
    orderData.orders[index].mealQuantity = mealQuantity;
    orderData.orders[index].updatedDate = new Date();

    return orderData.orders[index];
  },
};

export default orderService;
