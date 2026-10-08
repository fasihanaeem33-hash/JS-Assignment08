// Question 1 - Online Store Sales Report

const orders = [1200, 450, 3000, 750, 1500, 250, 4200, 900];

// Original array
console.log("Original Orders:", orders);

// First order amount greater than 2000
const firstOrderAbove2000 = orders.find((amount) => amount > 2000);

// All orders greater than 1000
const ordersAbove1000 = orders.filter((amount) => amount > 1000);

// Combined total of all orders
const totalOrders = orders.reduce((total, amount) => total + amount, 0);

// Display results
console.log("First Order Greater Than 2000:", firstOrderAbove2000);
console.log("Orders Greater Than 1000:", ordersAbove1000);
console.log("Combined Total:", totalOrders);