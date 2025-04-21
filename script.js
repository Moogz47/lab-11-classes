// Part 1: Base Class - ProductProperties
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

// Part 3: Static Method to Apply Discount
static applyDiscount(products, discount) {
  products.forEach(product => {
    product.price = product.price * (1 - discount);
   });
  }
}

  // Part 2: Subclass - PerishableProductProperties
  class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
      super(name, price, quantity);
      this.expirationDate = expirationDate;
    }

    toString() {
      return `${super.toString()}, Expiration Date: ${this.expirationDate}`;
    }
  }

// Part 4: Store Class
class Store {
  constructor() {
    this.inventory = [];
  }

  addProduct(product) {
    this.inventory.push(product);
  }

  getInventoryValue() {
    return this.inventory.reduce((total, product) => total + product.getTotalValue(), 0);
  }

  findProductByName(name) {
    return this.inventory.find(product => product.name === name) || null;
  }
}

// Part 5: Testing the System

// Create product instances
const milk = new PerishableProductProperties("Milk", 7.5, 6, "2025-05-01");
const yogurt = new PerishableProductProperties("Yogurt", 6.99, 14, "2025-04-30");
const mixedNuts = new ProductProperties("Mixed Nuts", 12.0, 10);
const cereal = new ProductProperties("Cereal", 4.5, 20);
const pasta = new ProductProperties("Pasta", 2.75, 30);

// Create store and add products
const groceryStore = new Store();
groceryStore.addProduct(milk);
groceryStore.addProduct(yogurt);
groceryStore.addProduct(mixedNuts);
groceryStore.addProduct(cereal);
groceryStore.addProduct(pasta);

// Display value BEFORE discount
console.log("=== INVENTORY BEFORE DISCOUNT ===");
console.log("Total Inventory Value: $" + groceryStore.getInventoryValue().toFixed(2));

// Apply 15% discount
ProductProperties.applyDiscount(groceryStore.inventory, 0.15);

// Print total inventory value after discount
console.log("\n=== INVENTORY AFTER 15% DISCOUNT ===");
console.log("Total Inventory Value: $" + groceryStore.getInventoryValue().toFixed(2));

// Find and print details of a specific product by name
const searchName = "Mixed Nuts";
const searchResult = groceryStore.findProductByName(searchName);
console.log(`\n=== SEARCH RESULT FOR "${searchName}" ===`);
console.log(searchResult ? searchResult.toString() : "Product not found.");