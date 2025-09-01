/*Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
For example (Input -> Output):
2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/


var summation = function (num) {
  console.log(`-- start test on ${num}--`)
  let sum = 0;
  for (let i = 1; i <= num; i++){
    console.log("current: " + sum)
    console.log("adding: " + i)
    sum += i;
    console.log("new current: " + sum)
    }
  
   console.log("answer: " + sum)
   console.log(`-- end test on ${num}--`)
   return sum
  }


Var summation = function (num) {
	Let sum = 0;
	For (let i = 1; i < num; i++){
		Sum += i;
	}
	Return sum
}
