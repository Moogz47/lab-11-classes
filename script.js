// Part 1
class ProductProperties {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotalValue() {
      return this.price * this.quantity;
    }
  
    toString() {
      return `Product: ${this.name}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }
  }

  // Part 2
  class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
      super(name, price, quantity);
      this.expirationDate = expirationDate;
    }
  }  