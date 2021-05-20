//Variables
// <keyword> <variable name> = <value>
// Announcement of a variable begins with a key word const.Such a variable must be immediately initialized by the value, after which it cannot be overridden.

//CONST
const age = 20;
console.log(`🚀  ~ age`, age);
const userName = 'Mango';
console.log(`🚀  ~ userName`, userName);
const socialProfileTag = '@gluck';
console.log(`🚀  ~ socialProfileTag`, socialProfileTag);
const totalWorkSalary = 4052;
console.log(`🚀  ~ totalWorkSalary`, totalWorkSalary);
const Profile = 'Mykola Vutov';
console.log(`🚀  ~ Profile`, Profile);

// The task 1
// Announce two variables, ProductName for the name of the goods and pricePeritem for storing prices apiece.When declared, the following characteristics of the goods assign the following characteristics:

// Title - Row "Droid"
// PRICE PRICE - Number 2000
const productName = 'Droid';
console.log(`🚀  ~ productName`, productName);
const pricePerItem = 2000;
console.log(`🚀  ~ pricePerItem`, pricePerItem);

//LET
let age = 5;
age = 10;
console.log(`🚀  ~ age`, age);

let userName = 'Mango';
userName = 'Poly';
console.log(`🚀  ~ userName`, userName);

// ❌
age = 15; // ReferenceError: Cannot access 'age' before initialization
console.log(age); // ReferenceError: age is not defined

// The task 2
// The name of the goods has changed to Repair Droid and increased its price by 1500 credits.Redefined the values of the values of PricePeritem and ProductName after their ad.
let pricePerItem = 2000;
console.log(`🚀  ~ pricePerItem`, pricePerItem);

pricePerItem += 1500;
console.log(`🚀  ~ pricePerItem`, pricePerItem);

let productName = 'Droid';
console.log(`🚀  ~ productName`, productName);

productName = 'Repair droid';
console.log(`🚀  ~ productName`, productName);

//Primitive Types (numbers, string, boolean)

// Number;
const age = 20;
console.log(`🚀  ~ age`, age);

const salary = 3710.84;
console.log(`🚀  ~ salary`, salary);

//String
const name = 'Mango';
console.log(`🚀  ~ name`, name);

const description = 'JavaScript essentials';
console.log(`🚀  ~ description`, description);

//Boolean

const isModalOpen = true;
console.log(`🚀  ~ isModalOpen`, isModalOpen);

const isLoggedIn = false;
console.log(`🚀  ~ isLoggedIn`, isLoggedIn);

// The task 3
// Announce the following variables using the Const or Let keyword and the appropriate values assign them.

// TopSpeed - number 160.
// Distance - number 617.54.
// Login - string "Mango935".
// isOnline - Boolean True.
// isAdmin - False Boolean.

const topSpeed = 160;
console.log(`🚀  ~ topSpeed`, topSpeed);
const distance = 617.54;
console.log(`🚀  ~ distance`, distance);
const login = 'Mango935';
console.log(`🚀  ~ login`, login);
const isOnline = true;
console.log(`🚀  ~ isOnline`, isOnline);
const isAdmin = false;
console.log(`🚀  ~ isAdmin`, isAdmin);

// Mathematical operators

const x = 10;
const y = 5;

// Addition
