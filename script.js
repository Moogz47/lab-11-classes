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

// Part 3
static applyDiscount(products, discount) {
  products.forEach(product => {
    product.price = product.price * (1 - discount);
   });
  }
}

  // Part 2
  class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
      super(name, price, quantity);
      this.expirationDate = expirationDate;
    }

    toString() {
      return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
  }
  
  const milk = new PerishableProductProperties("Milk", 7.5, 6, "2025-05-01");
  const yogurt = new PerishableProductProperties("Yogurt", 6.99, 14, "2025-04-30");