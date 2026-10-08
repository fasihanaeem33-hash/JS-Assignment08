// Question 4 - Store Inventory Using JavaScript Map

// Create inventory Map
const inventory = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
]);

// Display original inventory
console.log("Original Inventory:");
console.log(inventory);

// Add a new product
inventory.set("mangoes", 400);

// Update quantity of an existing product
inventory.set("apples", 600);

// Retrieve quantity of a specific product
const bananaQuantity = inventory.get("bananas");

console.log("Quantity of Bananas:", bananaQuantity);

// Check whether a product exists
const hasOranges = inventory.has("oranges");

console.log("Does oranges exist?", hasOranges);

// Remove one product
inventory.delete("oranges");

// Display current number of products
console.log("Current Number of Products:", inventory.size);

// Display all product names
console.log("All Product Names:");

inventory.forEach((quantity, product) => {
    console.log(product);
});

// Display all quantities
console.log("All Quantities:");

inventory.forEach((quantity) => {
    console.log(quantity);
});

// Print each product and quantity
console.log("Product and Quantity:");

inventory.forEach((quantity, product) => {
    console.log(product + ": " + quantity);
});

// Empty the inventory
inventory.clear();

// Display final size
console.log("Final Inventory Size:", inventory.size);