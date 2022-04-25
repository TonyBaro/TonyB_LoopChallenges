// Print odds 1-20
// Using a loop write code that will console.log all of the odd values from 1 up to 20.
console.log ("evens from 1-20")
for (var i=1 ; i<21; i++){
    if (i%2 !=0){
        console.log(i)
    }
}
console.log("")
// Decreasing Multiples of 3
// Using a loop write code that will console.log all of the values that are evenly divisible by 3 from 100 down to 0.
console.log("divisable by 3 from 100 to 0")
var multiples=100
while (multiples>0){
    if (multiples%3==0){
        console.log(multiples)
    }
    multiples--
}
console.log("")
// Print the sequence
// Using a loop write code that will console.log the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.
var sequenceArray=[4,2.5,1,-0.5,-2,-3.5]
console.log("printing the sequence given")
for (var i=0 ; i<sequenceArray.length; i++){
    console.log(sequenceArray[i])
}
console.log("")
// Sigma
// Write code that will add all of the values from 1-100 onto some variable sum and at the end console.log the result 1 + 2 + 3 + ... + 98 + 99 + 100. We should get back 5050 at the end.
var sum=0
var Sigma=0
console.log("sum of all numbers up to 100")
while (Sigma<101){
    sum=sum+Sigma
    Sigma++
}
console.log(sum)
console.log("")
// Factorial
// Write code that will multiply all of the values from 1-12 onto some variable product and at the end console.log the result 1 * 2 * 3 * ... * 10 * 11 * 12. We should get back 479001600 at the end.
console.log("12 Factorial is")
var product=1
for (var i=1; i<13 ; i++){
    product=product*i
}
console.log(product)