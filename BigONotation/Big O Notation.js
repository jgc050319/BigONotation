// ## **Step One: Simplifying Expressions**

// Simplify the following big O expressions as much as possible:

1. O(n + 10)= O(n)
2. O(100 * n)= O(n)
3. O(25)= O(1)
4. O(n^2 + n^3)= O(n^3)
5. O(n + n + n + n)= O(n)
6. O(1000 * log(n) + n)= O(n)
7. O(1000 * n * log(n) + n)= O(n log n)
8. O(2^n + n^2)= O(2^n)
9. O(5 + 3 + 1)= O(1)
10. O(n + n^(1/2) + n^2 + n * log(n)^10)= O(n^2)

// function multiplyAll(n){
//   for(let i=0; i<n; i++)// --- 1sec
// {
//   console.log(i);//-----n sec
//  }
// }

// function func2(n){
//   for(let i=0; i<n; i++)// --- 1sec
// {
//   console.log(i);//-----n sec

//   for (let j = 0; j<n; j++) {
//     console.log("Q"); // ----nxn sec
    
//   }
//  }
// }

//Step Two: Calculating Time Complexity
1. O(n)
2. O(n)
3. O(1)
4. O(n)
5. O(n^2)
6. O(n)

//Step Three - Short Answer
1. true
2. true
3. false
4. O(n)
5. O(n)
6. O(n)
7. O(n log n)
8. O(n)
9. O(1)
10. O(n)
11. O(1)
12. O(n)
13. O(n)

//Bonus
O(n)