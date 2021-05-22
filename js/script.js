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
console.log(`🚀  ~ x`, x);
const y = 5;
console.log(`🚀  ~ y`, y);

// Addition
console.log(x + y); //15

// Subtraction
console.log(x - y); //5

// Multiplication
console.log(x * y); //50

// Division
console.log(x / y); //2

// The task 4
// Support code, assigning a TotalPrice variable an expression for calculating the total amount of the order.The pricePerItem variable stores the price of one unit of goods, and orderedQuantity is the number of units of goods in order.

const pricePerItem = 3500;
console.log(`🚀  ~ pricePerItem`, pricePerItem);
const orderedQuantity = 4;
console.log(`🚀  ~ orderedQuantity`, orderedQuantity);
const totalPrice = pricePerItem * orderedQuantity;
console.log(`🚀  ~ totalPrice`, totalPrice);

// Pattern strings
const questName = 'Mango';
console.log(`🚀  ~ questName`, questName);
const roomNumber = 207;
console.log(`🚀  ~ roomNumber`, roomNumber);
const greeting = `Welcome $ {GuestName}, you are set in the room Number $ {roomNumber}`;
console.log(`🚀  ~ greeting`, greeting);

// The task 5
// Announce a variable message and write a purchase message, a string in format: "You Picked <product name>, Price per item is <product price> Credits."Where <product name> and <product price> are the values of the ProductName and PricePeritem variables.Use the syntax of template strings.

const productName = 'Droid';
console.log(`🚀  ~ productName`, productName);

const pricePerItem = 3500;
console.log(`🚀  ~ pricePerItem`, pricePerItem);

const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
console.log(`🚀  ~ message`, message);

// The task 6
// The store for the sale of repair droids is ready to open, it remains to write a script for their order.We declare variables and assign them the corresponding values:

// PricePerDroid - the price of one droid, value of 800
// OrderedQuantity - the number of droids in order, value 6
// DeliveryFee - shipping cost, value 50
// TotalPrice - the total amount of the order for payment, do not forget about the cost of delivery
// Message - message about the status of the order in the format "You Ordered Droids Worth <Total Price> Credits. Delivery (<Delivery Fee> Credits) is included in total Price."

const orderedQuantity = 6;
console.log(`🚀  ~ orderedQuantity`, orderedQuantity);

const pricePerDroid = 800;
console.log(`🚀  ~ pricePerDroid`, pricePerDroid);

const deliveryFee = 50;
console.log(`🚀  ~ deliveryFee`, deliveryFee);

const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
console.log(`🚀  ~ totalPrice`, totalPrice);

const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(`🚀  ~ message`, message);

//FUNCTION
// 1. AnnouncementOfTheMultiplyFunction
function multiply() {
  //Body function
  console.log('multiply function invocation');
}
// 2. Calls Multiply features
multiply(); // multiply function invocation
multiply(); // multiply function invocation
multiply(); // multiply function invocation

// The task 7
// Announce the Say hi function, inside which add console.log () with a string "Hello, This Is My First Function!".After calling the Say hi function

function sayHi() {
  console.log('Hello, this is my first function!');
}
sayHi();

// Parameters and arguments

// 1. Announcement of parameters x, y, z
function multiply(x, y, z) {
  console.log(`The result of multiplication is equal ${x * y * z}`);
}

// 2. Transfer of arguments

multiply(2, 3, 5); //30
multiply(4, 8, 12); //384
multiply(17, 6, 25); //2550

// The task 8
// The Add function should be able to add three numbers and output the result in the console.Add Add functions Three parameters A, B and C that will receive the values of the arguments when it is called.

// Additional Console.log () so that it logs in a string "ADDITION RESULT EQUALS <RESULT>", where <result> is the sum of the transmitted numbers.

function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

//Return value

function multiply(x, y, z) {
  console.log('Code to Return is performed as usual');
  // Return the result of multiplication expression
  return x * y * z;

  console.log('This log will never be completed, it stands after Return');
}

// The result of the function can be saved to the variable
let result = multiply(2, 3, 5);
console.log(`🚀  ~ result`, result); //30

result = multiply(4, 8, 12);
console.log(`🚀  ~ result`, result); //384

result = multiply(17, 6, 25);
console.log(`🚀  ~ result`, result); //2550
//!!!!
// The RETURN statement without explicitly specified value returns a special value undefined.In the absence of Return in the body of the function, it will still return undefined.
//!!!!

// The task 9
// Support code of the Add function so that it returns the result of the addition of the values of three parameters A, B and C.

function add(a, b, c) {
  return a + b + c;
}

add(2, 5, 8); // 15

console.log(add(15, 27, 10)); //52
console.log(add(10, 20, 30)); //60
console.log(add(5, 10, 15)); //30

//The task 10
// The MakeMessage (Name, Price) feature is and returns a purchase message.It declares two parameters whose values will be set during its call.

// Name - product name
// Price - price of goods
// Add function code so that in the MESSAGE variable recorded the string "You Picked <Product Name> Price PER Item IS <Product Price> Credits", where <Product Name> and <Product Price> These are the values of the Name and Price Parameters.Use the syntax of template strings.

function makeMessage(name, price) {
  const message = `You picked ${name}, price per item is ${price} credits`;

  return message;
}

makeMessage('Radar', 6150); //"You picked Radar, price per item is 6150 credits"

makeMessage('Scanner', 3500); //"You picked Scanner, price per item is 3500 credits"

makeMessage('Reactor', 8000); //"You picked Reactor, price per item is 8000 credits"

makeMessage('Engine', 4070); //"You picked Engine, price per item is 4070 credits"

// The task 11
// The CalculateTotalPrice feature considers and returns the total purchase amount.It takes two parameters whose values will be set during its call.

// OrderedQantity - the number of goods in the order;
// PricePeritem - the price of one unit of goods.
// An optional function code so that the total purchase amount is recorded in the TotalPrice variable, the result of multiplication of the number of goods on the price of one.

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  const totalPrice = orderedQuantity * pricePerItem;

  return totalPrice;
}

calculateTotalPrice(5, 100); //500
calculateTotalPrice(8, 60); //480
calculateTotalPrice(3, 400); //1200
calculateTotalPrice(1, 3500); //3500
calculateTotalPrice(12, 70); //840

// The task 12
// The MakeOrDerMessage (OrderedQuantity, PricePerDroid, DeliveryFee) features and returns a message about the purchase of repair droids.It declares three parameters whose values will be set during its call.

// OrderedQuantity - the number of droids in order
// PricePerDroid - the price of one droid
// DeliveryFee - shipping cost
// Complete function code so that it returns a message about the order in the format "You Ordered Droids Worth <Total Price> Credits. Delivery (<Delivery Fee> Credits) is included in total Price.".Do not forget about the delivery price when calculating the total cost.

function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

  return message;
}
