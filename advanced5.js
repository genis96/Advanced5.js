/* Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14
If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4
Notes:

In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.
*/

/* Pseudo
Math.abs() -> Returns the absolute value of a number (the value without regard to whether it is positive or negative). For example, the absolute value of -5 is the same as the absolute value of 5.

Need to subtract the -3 twice bc instead of substracting it, it was added and the result was 10, but it needs to be 4. So, 
we need to hang onto the first value which is "  var numString = num.toString();
"  create new var below use Number and make it a number. 

in the event that the input is negative then I need to subtract twice.  

var numString = num.toString -> makes input var into a string and then from there I grab the first value and set it equal to a number version of the first element in out number string. 
Then loop over the string, increment by each number in the input string and then check to see if input is negative, if thay value is true then we know that when we should have subtracted the first number, we added it. So in order to get where we should have been at, we need to subtract the first value twice. 
*/

function sumDigits(num) {
  var isthisNegative = false;
  // check if num is negative
  if(num < 0) {
    //if negative, get rid of negative sign, we deal w it later
    num = Math.abs(num);
    isthisNegative = true;
  }

  var total = 0;
  var numString = num.toString();
  var negValue = Number(numString[0]);
  for(var i = 0; i < numString.length; i++) {
    total += Number(numString[i]);
  }
  if(isthisNegative) {
    total = total - (2 * negValue);
    return total;
  } else {
    return total;
  }
}

var output = sumDigits(1148);
console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> 4




//So this code below only works if there are no negatives, if there negatives it returns NaN
function sumDigits(num) {
  var total = 0;
  var numString = num.toString();
  for(var i = 0; i < numString.length; i++) {
    console.log(numString[i])
    total += Number(numString[i]);
  }
  return total;
}

var output = sumDigits(1148);
console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> NaN


/* toString() function: used with a number and converts number to a string. Used to return a string representing the specified number object. 

Syntax: num.toString(base) 

The toString() function is used with a number num as shown in above syntax using the ‘.’ operator. This function will convert num to a string. 
Parameters Used: This function accepts a single optional parameter base. This parameter specifies the base in which the integer is represented in string. It is an integer between 2 and 36 which is used to specify the base for representing numeric values.

Return Value: The num.toString() method returns a string representing the specified number object.
*/


//Another Way
function sumDigits(num) {
  var numString = num.toString();
  var total = 0;
  var starting = 0;
  if(num < 0) { // if num is negative
    total -= Number(numString[1]);
    starting += 2;
  }

  for(var i = starting; i < numString.length; i++) {
    total += Number(numString[i]);
  }
  return total;
}

var output = sumDigits(1148);
console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> 4



