// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[tags.length - 1];
// // Change code above this line
// console.log(lastTag);

// 

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values)

// 

// 

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   const colorKey = Object.values(color);
//   hexColors.push(colors.hex);
//   rgbColors.push(colors.rgb);
  
//   console.log(hexColors);
//   console.log(rgbColors)
// }
// Change code below this line

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
// for (const product of products) {
//   if (productName === product.name) {
//     return product.price;
//     continue;
//   }
// }
// return null;



//   // Change code above this line
// }
// getProductPrice("Radar");
// getProductPrice("Grip");
// getProductPrice("Scanner");
// getProductPrice("Droid");
// getProductPrice("Engine");
// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
// let propValue = [];
//   for (product of products) {
//     if (product.hasOwnProperty(propName)){
//       propValue.push(product[propName]);
//     }
//   }
//   return propValue;


//   // Change code above this line
// }
// getAllPropValues("name");
// getAllPropValues("quantity");
// getAllPropValues("price");
// getAllPropValues("category");


// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(89, 64, 42, 17, 93, 51, 26);
// const worstScore = Math.min(89, 64, 42, 17, 93, 51, 26);
// console.log(bestScore);
// console.log(worstScore);

// Change code below this line
// function addOverNum(firstNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > firstNumber);
//     total += arg;
   
//   }
//   console.log(total);
//   return total;
//   // Change code above this line
// }

// function addOverNum(num, ...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     if (args[i] > num) {
//       sum += args[i];
//     }
//   }
//   console.log(sum);
//   return sum;
// }

// addOverNum(50, 15, 27);
// addOverNum(10, 12, 4, 11, 48, 10, 8);
// addOverNum(15, 32, 6, 13, 19, 8);
// addOverNum(20, 74, 11, 62, 46, 12, 36);


// // Change code below this line
// function findMatches(arr, ...args) {
//   const matches = []; // Don't change this line
// for (const arg of args) {
//   if (arr.includes(arg));
//   matches.push(arg)
// }
//   // Change code above this line
//  console.log(matches)
//   return matches;
// }

// function findMatches(arr, ...args) {
//   const matches = []; // Don't change this line
// for (let i = 0; i < args.length; i += 1) {
//   if (arr.includes(args[i])){
//   matches.push(args[i]);
// }
//   }
//   // Change code above this line
//   return matches;
// }

// findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7);
// findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2);
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41);
// findMatches([63, 11, 8, 29], 4, 7, 16);


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
// const bookIndex = this.books.indexOff(oldName);
// this.books.splice(bookIndex, 1, newName);


//     // Change code above this line
//   },
// };

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     // Change code below this line

// this.potions.push(potionName);
// console.log(this.potions);
//     // Change code above this line
//   },
// };
// atTheOldToad.addPotion("Invisibility");
// atTheOldToad.addPotion("Power potion");

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Зелье силы', 'Зелье видимости'],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     this.potions.push(potionName);
//   }
// };


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line

// this.potions.splice(this.potions.indexOf(potionName), 1);
// console.log(this.potions)
//     // Change code above this line
//   },
// };
// atTheOldToad.removePotion("Dragon breath");
// atTheOldToad.removePotion("Speed potion");


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//     console.log(this.potions);
//     // Change code above this line
//   },
// };
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth");
// atTheOldToad.updatePotionName("Stone skin", "Invisibility");

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//    for (const potion of this.potions) {
//     if (potion.name === newPotion.name) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }
//  }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//         if (potionName === this.potions[i].name) {
//           return this.potions.splice(i, 1)
//         }
//       }
//       return `Potion ${potionName} is not in inventory!`
// },

//   updatePotionName(oldName, newName) {
//    for(const potion of this.potions){
//       if (potion.nane === oldName) {
//       return potion.name = newName;
//       }
//     }
//       return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };





// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   callback(deliverPizza);
//   callback (makePizza);
//   console.log(`Delivering ${pizzaName} pizza.`);
  
  
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//    return;
// }
// makeMessage("Royal Grand", makePizza);
// makeMessage("Ultracheese", deliverPizza);

// const doMath = function(a, b, callback) {
//   const result = callback(a, b);
//   console.log(result);
// }
// const add = function(x, y) {
//  return x * y;
// }
// doMath(9, 9, add)

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function deliverPizza(pizzaName) {
//   console.log(`"Eating pizza ${pizzaName}.`);
// });
// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
// if (!this.pizzas.includes(pizzaName)) {
//   return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
// }
//       return makePizza(pizzaName);
//     }
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line
//   orderedItems.forEach(function(item){
//     totalPrice += item;
//   });
  

//     console.log(totalPrice);
//   // Change code above this line
//   return totalPrice;
// }
// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([412, 371, 94, 63, 176]);

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
// numbers.forEach(function(number){
//   if (number > value) {
//      filteredNumbers.push(numbers);
//   }
// })

// console.log(filteredNumbers);
//   // Change code above this line
//   return filteredNumbers;
// }
// filterArray([1, 2, 3, 4, 5], 3);
// filterArray([1, 2, 3, 4, 5], 4);
// filterArray([1, 2, 3, 4, 5], 5);
// filterArray([12, 24, 8, 41, 76], 38);
// filterArray([12, 24, 8, 41, 76], 20);

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach(function(firstArray) {
//     if (secondArray.includes(firstArray)) {
//       commonElements.push(firstArray);
//     }
//   })
 
//   console.log(commonElements);
//   return commonElements;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// for (let i = 0; i < firstArray.length; i += 1) {
//   if (secondArray.includes(firstArray[i])) {
//     commonElements.push(firstArray[i]);
//   }
// }

// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => 
//  {  return quantity * pricePerItem;
//   // Change code above this line
  
// }

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));

// Change code below this line





// const calculateTotalPrice = orderedItems => {
//     let totalPrice = 0;
//     orderedItems.forEach( item => {
//       totalPrice += item;
//     });
//     return totalPrice;
//   }

// // Change code above this line
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Change code above this line
//     return filteredNumbers;
//   }
//   console.log(filterArray([1, 2, 3, 4, 5], 3));
//   console.log(filterArray([1, 2, 3, 4, 5], 4));
//   console.log(filterArray([1, 2, 3, 4, 5], 5));
//   console.log(filterArray([12, 24, 8, 41, 76], 38));
//   console.log(filterArray([12, 24, 8, 41, 76], 20));

// Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach(element => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
  
//     // Change code above this line
//     return commonElements;
//   }
//   console.log(getCommonElements([1, 2, 3], [2, 4]));
//   console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));
//   console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));
//   console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
//   console.log(getCommonElements([1, 2, 3], [10, 20, 30]));

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [...numbers];
//   numbers.forEach((number, index) => {
//      if (numbers % 2 === 0) {
//     }
//     newArray[index] +=value;
//   });
//   return newArray;

//     // Change code above this line
//   }
//   console.log(changeEven([1, 2, 3, 4, 5], 10));
//   console.log(changeEven([2, 8, 3, 7, 4, 6], 10));
//   console.log(changeEven([17, 24, 68, 31, 42], 100));
//   console.log(changeEven([44, 13, 81, 92, 36, 54], 100));

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line

// const planetsLengths = planets.map(planets => planets.heigth);
// console.log(planetsLengths);
// const students = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// console.log(students.map(student => student.name));

// console.log(students.flatMap(student => student.name));

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number %2 !==0);
// console.log(evenNumbers);
// console.log(oddNumbers);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// console.log(allGenres);


// const uniqueGenres = allGenres.filter((genre, index, self) => self.indexOf(genre) === index);
// console.log(uniqueGenres);

// const uniqueCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index
// );

// const allGenres = books.flatMap((book) => book.genres);
// const uniqueGenres = allGenres.filter(
//   (item, index, array) => array.indexOf(item) === index,
// );
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);
// console.log(booksByAuthor);

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// // В колбек-функції зручно деструктуризувати властивості об'єкта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

// const users =
// [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]
// const getFriends = (users) => {
//  users.filter(user => users.indexOf(friend) === index)
// };

// const getFriends = (users) => {

//   const allFriends = users.flatMap(user => user.friends);
//   console.log(users.filter(users => users.indexOf(friends) === index))
// };


// function getFriends(users) {
//   const allFriends = users.flatMap(user => user.friends);
//   const uniqueFriends = Array.from(new Set(allFriends));
//   return uniqueFriends;
// }
// console.log(uniqueFriends);


// Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {
  
//   users.filter(({ age }) => age > minAge && age < maxAge);
 
//  };
//  console.log(getUsersWithAge( ));

  // users.filter(
  //   ({ age }) => age >= minAge && age < maxAge
  // );
  // console.log(getUsersWithAge); 

  // const books = [
  //   {
  //     title: "The Last Kingdom",
  //     author: "Bernard Cornwell",
  //     rating: 8.38,
  //   },
  //   {
  //     title: "Beside Still Waters",
  //     author: "Robert Sheckley",
  //     rating: 8.51,
  //   },
  //   {
  //     title: "The Dream of a Ridiculous Man",
  //     author: "Fyodor Dostoevsky",
  //     rating: 7.75,
  //   },
  //   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  //   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
  // ];
  // // Change code below this line
  
  // const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
  // console.log(sortedByAuthorName);
  // const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
  // console.log(sortedByReversedAuthorName);
  // const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
  // console.log(sortedByAscendingRating);
  // const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.ratings);
  // console.log(sortedByDescentingRating);
  
  
  // const users = [
  //   {
  //     name: "Moore Hensley",
  //     email: "moorehensley@indexia.com",
  //     eyeColor: "blue",
  //     friends: ["Sharron Pace"],
  //     isActive: false,
  //     balance: 2811,
  //     gender: "male"
  //   },
  //   {
  //     name: "Sharlene Bush",
  //     email: "sharlenebush@tubesys.com",
  //     eyeColor: "blue",
  //     friends: ["Briana Decker", "Sharron Pace"],
  //     isActive: true,
  //     balance: 3821,
  //     gender: "female"
  //   },
  //   {
  //     name: "Ross Vazquez",
  //     email: "rossvazquez@xinware.com",
  //     eyeColor: "green",
  //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
  //     isActive: false,
  //     balance: 3793,
  //     gender: "male"
  //   },
  //   {
  //     name: "Elma Head",
  //     email: "elmahead@omatom.com",
  //     eyeColor: "green",
  //     friends: ["Goldie Gentry", "Aisha Tran"],
  //     isActive: true,
  //     balance: 2278,
  //     gender: "female"
  //   },
  //   {
  //     name: "Carey Barr",
  //     email: "careybarr@nurali.com",
  //     eyeColor: "blue",
  //     friends: ["Jordan Sampson", "Eddie Strong"],
  //     isActive: true,
  //     balance: 3951,
  //     gender: "male"
  //   },
  //   {
  //     name: "Blackburn Dotson",
  //     email: "blackburndotson@furnigeer.com",
  //     eyeColor: "brown",
  //     friends: ["Jacklyn Lucas", "Linda Chapman"],
  //     isActive: false,
  //     balance: 1498,
  //     gender: "male"
  //   },
  //   {
  //     name: "Sheree Anthony",
  //     email: "shereeanthony@kog.com",
  //     eyeColor: "brown",
  //     friends: ["Goldie Gentry", "Briana Decker"],
  //     isActive: true,
  //     balance: 2764,
  //     gender: "female"
  //   }
  // ]

// // Change code below this line
// const sortByAscendingBalance = users => {
//  return [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance)};
//   console.log(sortByAscendingBalance( ));
// // Change code above this line



const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
// .filter((book) => book.rating >MIN_BOOK_RATING).map(book =>book.author)
// .sort((firstBook, secondBook) => firstBook.localeCompare(secondBook));
// console.log(names);

// const getSortedFriends = users => {
//   return [...users].flatMap(user => user.friends)
//     .filter((friends, index, array) => array.indexOf(friends) === index)
//     .sort((firstUser, secondUser) => firstUser.localeCompare(secondUser));
// };
// console.log(getSortedFriends());




// const getTotalBalanceByGender = (users, gender) => {
//   const totalBalance = [...users].filter(({gender:sex}) => sex === gender).reduce((sum, user) => sum + user.balance, 0);
//     return totalBalance
//   };

// class Storage {
//   constructor(items) {
//     this.items = items
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.item = newItem;
//   }
//   removeItem(itemToRemove) {
//     const index = this.items.indexOf(itemToRemove);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//   }
// }
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"


class Car {
  // Change code below this line
  #brand;
  #model;
  #price;
  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get #brand() {
    return this.#brand;
  }

  set #brand(newBrand) {
    this.#brand = newBrand;
  }

  get #model() {
    return this.#model;
  }

  set #model(newModel) {
    this.#model = newModel;
  }

  get #price() {
    return this.#price;
  }

  set #price(newPrice) {
    this.#price = newPrice;
  }
  // Change code above this line
}

  