class Order {
  constructor() {
    this.id = null;
    this.status = 'active';
    this.mealQuantity = null;
    this.total = null;
    this.userId = null;
    this.addressId = null;
    this.mealId = [];
    this.createdDate = new Date();
    this.updatedDate = new Date();
  }
}

export default Order;
