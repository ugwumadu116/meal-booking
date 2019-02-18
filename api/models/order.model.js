class Order {
  constructor() {
    this.id = null;
    this.status = 'confirmed' || 'delivered' || 'cancelled';
    this.mealNumber = null;
    this.total = null;
    this.userId = null;
    this.addressId = null;
    this.mealId = [];
    this.catererId = null;
    this.createdDate = new Date();
    this.updatedDate = new Date();
  }
}

export default Order;
