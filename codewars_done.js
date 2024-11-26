//1
function betterThanAverage(classPoints, yourPoints) {
  classPoints.push(yourPoints);

  let sum = 0;

  for (let i = 0; i < classPoints.length; i += 1) {
    sum += classPoints[i];
  }

  let averagePoints = sum / classPoints.length;

  // let result = yourPoints > averagePoints ? true : false;

  return yourPoints > averagePoints;
}

betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21);

//2
function stringToArray(string) {
  return string.split(" ");
}

console.log(stringToArray("I love you"));

//3
function grow(x) {
  let mult = 1;
  for (const value of x) {
    mult *= value;
  }

  return mult;
}

console.log(grow([1, 2, 3]));

//4
function invert(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === 0) {
      newArray.push(array[i]);
    } else {
      array[i] *= -1;
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(invert([-1, 2, -5, 0]));

//5
function solution(str) {
  return str.split("").reverse().join("");
}
console.log(solution("world"));

//6
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

//7
function makeNegative(num) {
  return num > 0 ? (num *= -1) : num;
}

function makeNegative(num) {
  return -Math.abs(num);
}
//Math.abs - модуль числа = абсолютне значення числа. |x| = x, |-x| = x, |0| = 0.

//8
function countPositivesSumNegatives(input) {
  let countPositive = 0;
  let sumNegative = 0;
  let newArray = [];

  if (input === null || input.length === 0) {
    return [];
  }

  for (let value of input) {
    if (value > 0) {
      countPositive += 1;
    } else {
      sumNegative += value;
    }
  }

  return (newArray = [countPositive, sumNegative]);
}

//9
function check(a, x) {
  for (const value of a) {
    return a.includes(num);
  }
}
console.log(check([1, 2, 4], 1));

//10
function noSpace(x) {
  //МІЙ ВАРІК

  // let arr = x.split("");
  // let newArr = [];
  // for (value of arr) {
  //   if (value !== " ") {
  //     newArr.push(value);
  //   }
  // }
  // return newArr.join("");

  //КОРОТКІ ВАРІКИ!!!

  return x.replaceAll(" ", "");

  //return x.split(" ").join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));

//11
function maps(x) {
  let newArr = [];
  for (let i = 0; i < x.length; i += 1) {
    newArr.push(x[i] * 2);
  }
  console.log(x);
  return newArr;
}

console.log(maps([1, 2, 3]));

//12
function solution(str, ending) {
  return str.endsWith(ending);
}

console.log(solution("abc", "bc"));

//13
var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

console.log(isSquare(4));

// Number.isInteger(n) - перевірка на ціле числож
// Math.sqrt(n) - корень взяти із числа

14; //
function XO(str) {
  let arr = str.toLowerCase().split("");
  let letterO = 0;
  let letterX = 0;

  for (const letter of arr) {
    if (letter === "x") {
      letterO += 1;
    }

    if (letter === "o") {
      letterX += 1;
    }
  }

  console.log(letterO);
  console.log(letterX);

  return letterO === letterX ? true : false;
}

console.log(XO("ooo33ooOOxXYx"));

15; //
var number = function (busStops) {
  let finishStop = 0;
  let peopleIn = 0;
  let peopleOut = 0;
  for (let i = 0; i < busStops.length; i += 1) {
    peopleIn += busStops[i][0];
    peopleOut += busStops[i][1];
  }

  return (finishStop = peopleIn - peopleOut);
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);

var number = function (busStops) {
  var totalPeople = 0;
  for (var i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
};

//
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  let total = 0;
  for (const product of products) {
    const { name, price, quantity } = product;
    if (name === productName) {
      return (total = price * quantity);
    }
  }
}
console.log(calculateTotalPrice("Scanner"));

//16
function fakeBin(x) {
  let arr = x.split("");
  let newArr = [];
  for (const value of arr) {
    if (value < 5) {
      newArr.push(0);
    } else {
      newArr.push(1);
    }
  }
  return newArr.join("");
}

console.log(fakeBin("45385593107843568"));

//17
function points(games) {
  let totalPoint = 0;

  for (const game of games) {
    let newArr = game.split(":");
    if (newArr[0] > newArr[1]) {
      totalPoint += 3;
    } else if (newArr[0] === newArr[1]) {
      totalPoint += 1;
    }
  }
  return totalPoint;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);

//18
function findSmallestInt(args) {
  let min = args[0];
  for (let i = 1; i < args.length; i += 1) {
    if (args[i] < min) {
      min = args[i];
    }
  }
  return min;
}

function findSmallestInt(args) {
  return Math.min(...args);
}

console.log(findSmallestInt([78, 56, 232, 12, 8]));

//19
function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

console.log(sumTwoSmallestNumbers([55, 125, 85, 195, 225]));

//20
function basicOp(operation, value1, value2) {
  let result = 0;
  switch (operation) {
    case "+":
      result = value1 + value2;
      break;

    case "-":
      result = value1 - value2;
      break;

    case "*":
      result = value1 * value2;
      break;

    case "/":
      result = value1 / value2;
      break;
  }

  return result;
}

//21
function sumArray(array) {
  if (!array || array.length <= 1) {
    return 0;
  }

  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((acc, item) => {
      return (acc += item);
    }, 0);
}

console.log(sumArray([10]));

//22
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return mpg * fuelLeft >= distanceToPump ? true : false;
};

//
const quarterOf = (month) => {
  let quarter;

  switch (month) {
    case 1:
    case 2:
    case 3:
      quarter = 1;
      break;

    case 4:
    case 5:
    case 6:
      quarter = 2;
      break;

    case 7:
    case 8:
    case 9:
      quarter = 3;
      break;

    case 10:
    case 11:
    case 12:
      quarter = 4;
      break;
  }
  return quarter;
};

const quarterOf2 = (m) => Math.ceil(m / 3);

console.log(quarterOf(3));

//00
function arr(a, b) {
  let common = [];
  a.forEach((element) => {
    if (b.includes(element)) {
      common.push(element);
    }
  });
  return common;
}
console.log(arr([1, 2, 3], [2, 3, 4]));

//23
// Sum Numbers
function sum(numbers) {
  "use strict";
  const total = numbers.reduce((acc, number) => {
    return (acc += number);
  }, 0);
  return total;
}

console.log(sum([1, 5.2, 4, 0, -1]));
console.log(sum([]));

//24

function nbYear(p0, percent, aug, p) {
  let years = 0;
  let p1 = p0;

  for (let i = 1; p1 < p; i += 1) {
    p1 = Math.ceil(p1 + (p1 * percent) / 100 + aug);
    years = i;
  }
  return years;
}
console.log(nbYear(1500000, 0.25, 1000, 2000000));

console.log(Math.round(50.75));

function nbYear(p0, percent, aug, p) {
  for (var years = 0; p0 < p; years++) {
    p0 = Math.floor(p0 + (p0 * percent) / 100 + aug);
  }
  return years;
}

//25
function createPhoneNumber(numbers) {
  numbers.splice(0, 0, "(");
  numbers.splice(4, 0, ")");
  numbers.splice(5, 0, " ");
  numbers.splice(9, 0, "-");

  return numbers.join("");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

function createPhoneNumber(numbers) {
  return numbers.reduce(
    (acc, number) => acc.replace("x", number),
    "(xxx) xxx-xxxx"
  );
}

//26
function generateHashtag(str) {
  if (!str.length) {
    return false;
  }

  let arr = str.split(" ");
  let heshArr = ["#"];

  for (let value of arr) {
    if (value.length) {
      let newWord = value[0].toUpperCase() + value.slice(1);
      heshArr.push(newWord);
    }
  }

  let heshtag = heshArr.join("");

  return heshtag.length > 140 || heshtag.length === 1 ? false : heshtag;
}
console.log(generateHashtag("a".repeat(139), "#A" + "a".repeat(138)));

//--1
function generateHashtag(str) {
  var hashtag = str.split(" ").reduce(function (tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, "#");

  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}

//--2
function generateHashtag(str) {
  if (!str.trim()) return false;

  const result =
    "#" +
    str
      .split(" ")
      .map((l) => l.charAt(0).toUpperCase() + l.slice(1))
      .join("");

  return result.length > 140 ? false : result;
}

//
function findOdd(A) {
  const obj = A.reduce((acc, item) => {
    acc.hasOwnProperty(item) ? (acc[item] += 1) : (acc[item] = 1);
    return acc;
  }, {});
  const value = Object.values(obj).filter((item) => item % 2 === 1);

  const result = Object.keys(obj).find((key) => obj[key] === value[0]);
  return Number(result);
}
console.log(findOdd([7]));

function findOdd(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}

//27
function makeNegative(num) {
  return num > 0 ? num * -1 : num;
}