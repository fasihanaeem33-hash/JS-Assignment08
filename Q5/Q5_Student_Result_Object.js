// Question 5 - Student Result Object

// First student object
const student1 = {
    name: "Ali",
    class: "10th",
    chemistry: 85,
    mathematics: 90,
    Urdu: 80,
    English: 75,

    calculateResult: function () {
        const total =
            this.chemistry +
            this.mathematics +
            this.Urdu +
            this.English;

        const percentage = (total / 400) * 100;

        return {
            total: total,
            percentage: percentage
        };
    }
};

// Display name using dot notation
console.log("Student Name:", student1.name);

// Display class using dot notation
console.log("Class:", student1.class);

// Access property using bracket notation
console.log("Chemistry Marks:", student1["chemistry"]);

// Calculate result
const result1 = student1.calculateResult();

console.log("Student:", student1.name);
console.log("Total Marks:", result1.total);
console.log("Percentage:", result1.percentage + "%");


// Second student object
const student2 = {
    name: "Sara",
    class: "10th",
    chemistry: 90,
    mathematics: 85,
    Urdu: 88,
    English: 92,

    calculateResult: function () {
        const total =
            this.chemistry +
            this.mathematics +
            this.Urdu +
            this.English;

        const percentage = (total / 400) * 100;

        return {
            total: total,
            percentage: percentage
        };
    }
};

// Calculate second student's result
const result2 = student2.calculateResult();

console.log("Student:", student2.name);
console.log("Total Marks:", result2.total);
console.log("Percentage:", result2.percentage + "%");


// Remove one property from student 2
delete student2.Urdu;

// Display final student 2 object
console.log("Student 2 After Removing Urdu Property:");
console.log(student2);