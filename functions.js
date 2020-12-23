//7.Function returns word concatenated to itself n number of times.
function repeatWord(string, number) {
  if (number === 1) {
    return string;
  } else if (number > 1) {
    return string + repeatWord(string, number - 1);
    //string + string...
  } else {
    return "";
  }
}

console.log(repeatWord("hello", 5));
//Needs flattening.

//8.Function returns a full name.
function writeFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

console.log(writeFullName("Daniela", "Carrillo"));

//9.Function returns true if the sum of all the numbers > 100.
let numbers1 = [7, 23, 19, 35, 40];

function compareSum(array) {
  let sumOfArr = numbers1.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log(sumOfArr > 100);
}

compareSum(numbers1);

//10.Function returns the average of all the elements in the array.
function getAvg1(array) {
  let sumOfElements1 = numbers1.reduce((a, b) => {
    return a + b;
  }, 0);
  console.log(sumOfElements1 / numbers1.length);
}

getAvg1(numbers1);

//11.Function returns true if the average of elements in the 1st array > average of elements in the 2nd array.
let numbers2 = [12, 45, 20, 9, 30];

function compareTwoAvgs(array1, array2) {
  let sumOfArray1 = numbers1.reduce((a, b) => {
    return a + b;
  }, 0);
  let averageArray1 = sumOfArray1 / numbers1.length;

  let sumOfArray2 = numbers2.reduce((a, b) => {
    return a + b;
  }, 0);
  let averageArray2 = sumOfArray2 / numbers2.length;
  console.log(averageArray1 > averageArray2);
}

compareTwoAvgs(numbers1, numbers2);

//12.Function returns true if isHotOutside is true and moneyInPocket > 10.50.

let isHotOutside = true;
function buyDrink(isHotOutside, moneyInPocket) {
  if (isHotOutside && moneyInPocket > 10.5) {
    console.log("I will buy a drink.");
  } else {
    console.log("I won't buy a drink.");
  }
}

buyDrink(isHotOutside, 5);

/*13. This function converts the temperature from degrees in Farenheit to degrees in Celsius.  This conversion is useful for international travelers visiting the US, like those visiting Las Vegas. */

function convertFarenheitToCelsius(temperatureInFarenheit) {
  const temperatureInCelsius = (Math.round((temperatureInFarenheit - 32) * (5 / 9)));
  console.log(`${temperatureInFarenheit} degrees Farenheit is approximately ${temperatureInCelsius} degrees Celsius`);
}

convertFarenheitToCelsius(100); //Displays 100 degrees Farenheit is approximately 38 degrees Celsius