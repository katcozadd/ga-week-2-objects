//Datatypes - Exercise 1
// Answer the Following
// For each of the following, write which datatypes you would use to represent the data, and then give a small example of the data structure:

// 1.)A light switch that can be either on or off.
// Datatype:Boolean

// 2.)A user's email address.
// Datatype:Strong

// 3.)A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// Datatype: Object

// 4.)A list of student names from our class.
// Datatype: Array

// 5.)A list of student names from our class, each with a location.
// Datatype: Object

// 6.)A list of student names from our class, each with a location and each with a list of favorite tv shows.
// Datatype: Object

//Take it Easy - Exercise 2
// 1.)Make an array that holds all of the colors of the rainbow.

// const colorsOfRainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// 2.)Write code that will access "blue" from the rainbow array.

// colorsOfRainbow[4];
// console.log(colorsOfRainbow[4]);

// 3.)Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.

// const myObject = {
// 	name: 'Kat',
// 	favoriteFood: 'mushrooms',
// 	hobby: 'drinking wine?',
// 	currentCity: 'Denver',
// 	favoriteDateType: 'Strings'
// };

// // 4.)Write code that will access your hobby from the object that you just created.

// myObject.hobby 
// console.log(myObject.hobby);


//Crazy Object! - Exercise 3

// const crazyObject = {
//   taco: [{meat: 'steak',
//          cheese: ['panela', 'queso', 'chihuahua']},
//          {meat: 'chicken',
//           salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
//         ],
//   larry: {
//     	nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     	quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//     	characters: [{
//       	name: "Jeff",
//       	occupation: "manager"
//     },
//     {
//      	name: "funkhauser",
//       	occupation: "tv dude"
//     },
//     {
//       	name: "susie",
//       	occupation: "jeffs wife",
//      	favourtieHobby: "Swearing at Larry and Jeff"
//     },
//     ]
//   }
// }

// //Use crazy Object to log the following.
// //1.)"omg my mouth is burning"

// console.log(crazyObject.taco[1].salsa[5]);

// //2.)"Pretty pretty prettayyyyy good"

// console.log(crazyObject.larry.quotes[0]);

// //3.)"Swearing at Larry and Jeff"

// console.log(crazyObject.larry.characters[2].favourtieHobby);

// //4.)"Chicken Teriyaki Boyyyyyy"

// console.log(crazyObject.larry.nicknames[1]);

// //5.)The object the contains the name funkhauser

// console.log(crazyObject.larry.characters[1]);

//Object-ception - Exercise 4

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}


//Change the value of limbo to null.
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);


