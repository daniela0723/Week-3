//1 
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
//Slice method is non-mutating.
const lastElement = ages.slice(-1);
const firstElement = ages.slice(0, 1);

//1.a Subtract first element's value from the last element's value programmatically(so use a function?).
;
function ageDifference(arrayName) {
      console.log(arrayName.slice(-1) - arrayName.slice(0,1));
}

ageDifference(ages);//First call; displays 90.

//1.b Add another element to the end of the array to test the function.
ages.push(80);
ageDifference(ages); //Second call; displays 77.

//1.c Calculate the average age using a loop.
let sumOfAges = 0;
let averageAge;

for (let i = 0; i < ages.length; i++) {
  sumOfAges += ages[i];
  averageAge = sumOfAges / ages.length;
}
console.log(averageAge); //Displays 34.444.  After ages.push(80): 310/9 = 34.444...

///////////////////////////////////////////////////////////

//2.a Calculate the average number of letters per name.
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

function getAverageStringLength(array) {
  //Convert strings to numbers that represent length.
  let stringLengths = array.map(string => string.length);
  //Add numbers.
  let sumOfStringLengths = stringLengths.reduce((a,b) => a + b, 0);
  console.log(sumOfStringLengths / array.length);
}

getAverageStringLength(names);


//2.b Iterate through the array again and concatenate all the names together, separated by spaces
let string = "";
for (i = 0; i < names.length; i++) {
  string += names[i] + " ";
}
console.log(string);

////////////////////////////////////////////////////////////

//5. Iterate over the previously created names array and add the length of each name to the nameLengths array.
//const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
const nameLengths = [];
for (name of names) {
  nameLengths.push(name.length);
}
console.log(nameLengths);

////////////////////////////////////////////////////////////

//6. Iterate over the nameLengths array and calculate the sum of all the elements in the array
let total = 0;
for (let i = 0; i < nameLengths.length; i++) {
  total += nameLengths[i];
}
console.log(total);
