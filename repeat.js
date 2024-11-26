// // 9
// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
//   [emailInputName]: "henry.carter@aptmail.com",
//   [passwordInputName]: "jqueryismyjam",
//   // Change code above this line
// };

// 10
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// 13
// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }

// const contacts = [
//   {
//     firstName: "Akira",
//     lastName: "Laine",
//     number: "0543236543",
//     likes: ["Pizza", "Coding", "Brownie Points"],
//   },
//   {
//     firstName: "Harry",
//     lastName: "Potter",
//     number: "0994372684",
//     likes: ["Hogwarts", "Magic", "Hagrid"],
//   },
//   {
//     firstName: "Sherlock",
//     lastName: "Holmes",
//     number: "0487345643",
//     likes: ["Intriguing Cases", "Violin"],
//   },
//   {
//     firstName: "Kristian",
//     lastName: "Vos",
//     number: "unknown",
//     likes: ["JavaScript", "Gaming", "Foxes"],
//   },
// ];

// function lookUpProfile(name, prop) {
//   for (let contact of contacts) {
//     if (contact.firstName === name) {
//       if (contact.hasOwnProperty(prop)) {
//         return contact[prop];
//       } else {
//         return "No such property";
//       }
//     }
//   }
//   return "No such contact";
// }

// function lookUpProfile(name, prop) {
//   for (const contact of contacts) {
//     if (contact.firstName === name) {
//       if (contact[prop]) {
//         return contact[prop];
//       }
//       return "No such property";
//     }
//   }
//   return "No such contact";
// }

// console.log(lookUpProfile("Sherlock", "likes"));

// Math.floor(Math.random() * (max - min + 1)) + min;

// function findGreaterOrEqual(a, b) {
//   return a === b
//     ? "a and b are equal"
//     : a > b
//     ? "a is greater"
//     : "b is greater";
// }

// function rangeOfNumbers(startNum, endNum) {
//   let arr = [];

//   if (startNum === endNum) {
//     arr.push(endNum);
//   } else {
//     const countArray = rangeOfNumbers(startNum, endNum - 1);
//     countArray.push(endNum);
//     arr = countArray;
//   }

//   return arr;
// }

// console.log(rangeOfNumbers(2, 6));

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return text
    .toLowerCase()
    .split("")
    .filter((letter) => {
      let index = alphabet.indexOf(letter);
      return index > -1;
    })
    .map((letter) => alphabet.indexOf(letter) + 1)
    .join(" ");
}

console.log(alphabetPosition("text"));
