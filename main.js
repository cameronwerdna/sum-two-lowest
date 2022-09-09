// function takes in an array, sorts them, & returns the sum of the array's lowest two integers.
function sumTwoSmallestNumbers(numbers) {  
    numbers = numbers.sort((a, b) =>  a - b)
    return numbers[0] + numbers[1]
  }


console.log(sumTwoSmallestNumbers([2, 20, 200])) // => 22
console.log(sumTwoSmallestNumbers([21, 47, 46])) // => 67
console.log(sumTwoSmallestNumbers([33, 67, 40])) // => 73