// Question 2 - Student Performance Analyzer

const marks = [45, 78, 92, 61, 88, 54, 73, 95];

// Original marks
console.log("Original Marks:", marks);

// Increase every mark by 5
const practiceMarks = marks.map((mark) => mark + 5);

// Marks 70 or above
const passingMarks = marks.filter((mark) => mark >= 70);

// First mark greater than 90
const firstMarkAbove90 = marks.find((mark) => mark > 90);

// Total of all original marks
const totalMarks = marks.reduce((total, mark) => total + mark, 0);

// Display results
console.log("Practice Marks (+5):", practiceMarks);
console.log("Marks 70 or Above:", passingMarks);
console.log("First Mark Greater Than 90:", firstMarkAbove90);
console.log("Total Original Marks:", totalMarks);

// Check original array
console.log("Original Marks After Processing:", marks);