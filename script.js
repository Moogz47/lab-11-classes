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

// Product Output Container Function
function printToPage(message) {
  const outputDiv = document.getElementById("output");
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  outputDiv.appendChild(paragraph);
}

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
printToPage("=== INVENTORY BEFORE DISCOUNT ===");
printToPage("Total Inventory Value: $" + groceryStore.getInventoryValue().toFixed(2));

// Apply 15% discount
ProductProperties.applyDiscount(groceryStore.inventory, 0.15);

// Print total inventory value after discount
printToPage("=== INVENTORY AFTER 15% DISCOUNT ===");
printToPage("Total Inventory Value: $" + groceryStore.getInventoryValue().toFixed(2));

// Find and print details of a specific product by name
const searchName = "Mixed Nuts";
const searchResult = groceryStore.findProductByName("Mixed Nuts");
printToPage("=== SEARCH RESULT FOR 'Mixed Nuts' ===");
printToPage(searchResult ? searchResult.toString() : "Product not found.");

// Table to Display Products on Homepage
function displayInventoryTable(products) {
  const outputDiv = document.getElementById("output");
  outputDiv.innerHTML = ""; // Clear previous output

  const table = document.createElement("table");
  table.classList.add("inventory-table");

  // Table Header
  const headerRow = document.createElement("tr");
  const headers = ["Name", "Price ($)", "Quantity", "Expiration Date"];
  headers.forEach(headerText => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  // Table Rows
  products.forEach(product => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = product.name;
    row.appendChild(nameCell);

    const priceCell = document.createElement("td");
    priceCell.textContent = product.price.toFixed(2);
    row.appendChild(priceCell);

    const quantityCell = document.createElement("td");
    quantityCell.textContent = product.quantity;
    row.appendChild(quantityCell);

    const expirationCell = document.createElement("td");
    expirationCell.textContent = product.expirationDate || "N/A";
    row.appendChild(expirationCell);

    table.appendChild(row);
  });

  outputDiv.appendChild(table);
}