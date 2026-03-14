console.log("Radhe Radhe");

//1. Print 1 to N
const btn = document.getElementById("btn");
const numElement = document.getElementById("num");
// btn.addEventListener("click", () => {
//   const num = numElement.value;
//   for (let it = 1; it <= num; it++) {
//     console.log(it);
//   }
//   numElement.value = ''
// });

//2.Print in reverse order

// btn.addEventListener("click", () => {
//   const num = numElement.value;
//   for (let it = 1; it <= num; it++) {
//     console.log(num - it + 1);
//   }
//   numElement.value = "";
// });

//3. Print all even numbers from 1 to N
for (let index = 1; index <= 10 / 2; index++) console.log(index * 2);

//4. Print odd numbers from 1 to N, but the loop must still run N/2 times.
for (let index = 0; index < 10 / 2; index++) {
  if (index * 2 + 1 <= 10) {
    console.log(index * 2 + 1);
  }
}

//5. Sum of first N natural numbers
//BruteForce solution
console.time();
const count = 1000000;
let sum = 0;
for (let index = 1; index <= count; index++) {
  sum += index;
}
console.log(sum);
console.timeEnd();

//approach 2: Optimized using formula
console.time();
console.log((count * (count + 1)) / 2);
console.timeEnd();

//6.Factorial of N
let product = 1;
const fact = 6;
if ((fact == 0)) {
  console.log(product);
} else {
  for (let index = 1; index <= fact; index++) {
    product = product * index;
  }
  console.log(product);
}

//7.Sum of all even numbers upto N
const input = 10;
let sumEven = 0;
for (let index = 1; index <= input; index++) {
    if (index %2 ==0) {
        sumEven+=index;
    }
    
}
console.log(sumEven);

//8.Print all numbers divisible by 3 and 5 upto N
const numInp = 30;
for (let index = 1; index <= numInp; index++) {
    if (index%3===0  && index%5===0) {
        console.log(index);  
    }
}

//9.Print only even numbers that are both even and perfect squares
let inp = 20
for (let index = 2; index*index <= inp; index++) {
    if ((index*index) %2 ==0) {
         console.log(index*index);   
    }
   
}

