const com = document.querySelector(".company");
const teacher = document.querySelector(".teacher");

console.log(com.textContent);
console.log(teacher.textContent);

teacher.textContent = "Prasanth";
console.log(teacher.textContent);

// LOOPS
for (let i = 5; i < 10; i++) {
  //Initial, Condition, Inc or Dec
  console.log(i, "Abhishek Nayak");
}

let sum = 0;
for (let k = 1; k <= 100; k++) {
  sum = sum + k;
}

// sum = 0 + 1
// sum = 1 + 2
// sum = 3 + 3
// sum = 6 + 4
// sum = 10 + 5

console.log(sum);

// HOMEWORK
// 1. Select a text from a tag and try to manipulate it.
// 2. Print the sum of 1 to 10000.
// 3. Add 3 best locations from google maps having complete width.
