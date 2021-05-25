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
const login = 'mango935';
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
//Comparison Operators >,> =, <and <=

const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

// Task 13.
// IsAdult function announces one parameter AGE (age), the value of which will be set during its call.Variable Passed Variable Expression of the User's Age Checking at Perfect.A person is considered to be adults aged 18 and older.

function isAdult(age) {
  const passed = age >= 18;
  return passed;
}
isAdult(20); //true
isAdult(14); //false
isAdult(8); //false
isAdult(37); //true

// Comparison operators === and! ==
// ❌ Bad, the type of types is performed
console.log(5 == '5'); // true
console.log(5 != '5'); // false
console.log(1 == true); // true
console.log(1 != true); // false

// ✅ Well, the type of types is not executed
console.log(5 === '5'); // false
console.log(5 === 5); // true
console.log(5 !== '5'); // true
console.log(5 !== 5); // false
console.log(1 === true); // false
console.log(1 !== true); // true

// Task 14.
// The isValidPassword(password) feature checks the equality of saved and entered by passwords and returns the check result - the Bul True or False.The savedPassword variable stores the value of the previously saved password.Entered password is transmitted to the Password parameter.

// Navigating the IsMATCH variable Expression of the equality of the equality of the entered and previously saved passwords.The result of the scan expression must be true if the values match, and false, if not

function isValidPassword(password) {
  const savedPassword = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password === savedPassword;

  // Change code above this line
  return isMatch;
}
isValidPassword('mangodab3st'); // false
isValidPassword('kiwirul3z'); // false
sValidPassword('jqueryismyjam'); // true

// Instruction IF ... else
if (condition) {
  // Body if.
} else {
  // Body ELSE.
}

let coast;
const subscription = 'pro';

if (subscription === 'pro') {
  coast = 100;
} else {
  coast = 0;
}
console.log(coast); //100

let coast;
const subscription = 'free';

if (subscription === 'pro') {
  coast = 100;
} else {
  coast = 0;
}
console.log(coast); //0

// The task 15
// Add an expression of the inspection of the user majority, the value of the AGE parameter, in the condition for the IF instruction.

// If the user is an adult, the IF block must be executed and the "You Are An Adult" string is written to the Message variable.
// Otherwise, the ELSE block must be performed and the "You Are A Minor" string is recorded.
function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}
// Task 16
// The Checkstorage feature(Available, Ordered) checks the possibility of placing the order and returns a message on the result.It declares two parameters whose values will be set during its call:

// Available - Total amount of goods in stock
// Ordered - units of goods in order
// Using branches add function code so that:

// If the order is indicated by a number exceeding the amount of goods in stock, the "Not Enough Goods In Stock!" Is written to the Message variable.
// Otherwise, the line "Order Is Processed, Our Manager Will Contact You.".
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  ordered <= available
    ? (message = 'Order is processed, our manager will contact you.')
    : (message = 'Not enough goods in stock!');
  // Change code above this line
  return message;
}
checkStorage(100, 50); // "Order is processed, our manager will contact you."
checkStorage(100, 130); // "Not enough goods in stock!"
checkStorage(200, 20); // "Order is processed, our manager will contact you."
checkStorage(200, 150); // "Order is processed, our manager will contact you."
checkStorage(150, 180); //"Not enough goods in stock!"

//Combined assignment operator
let age = 25;
//Classic recording
age = age + 1;
console.log(age); // 26
//==========================
let age = 25;
// Just a more brief entry, also works
age += 1;
console.log(age); // 26
//Task 17
// Replace expressions with standard mathematics for a combined assignment operator with adding, subtraction, multiplication and division.
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;

b -= 4;

c *= 3;

d /= 10;
//Task 18
// Station for the sale of repair droids is ready for launch, it remains to write software for the sales department.

// The MakeTransaction function (customerCredits pricePerDroid, OrderedQuantity, customerCredits) performs a transaction for the sale of droids and returns a message about the result result. It declares three parameters whose values ​​will be set during its call:

// PricePerDroid - the price of one droid
// OrderedQuantity - Number of droids ordered
// CustomerCredits - the amount of funds on the client's account
// Supplied to its next functionality:

// Announce TotalPrice variable to store the total amount of the order and assigns it an expression of the calculation of this amount.
// Add a check whether the client will pay for the order:
// If the amount to payment exceeds the number of credits on the client's account, write down to the Message Variable Line "Insufficient Funds!";
// Otherwise, deduct the purchase amount from the client's account and write to the Message variable Message: "You Ordered <Number> Droids, You Have <Number> Credits Left"

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;
  totalPrice > customerCredits
    ? (message = 'Insufficient funds!')
    : (message = `You ordered ${orderedQuantity} droids, you have ${
        customerCredits - totalPrice
      } credits left`);

  // Change code above this line
  return message;
}

makeTransaction(3000, 5, 23000); // "You ordered 5 droids, you have 8000 credits left"
makeTransaction(1000, 3, 15000); // "You ordered 3 droids, you have 12000 credits left"
makeTransaction(5000, 10, 8000); // "Insufficient funds!"
makeTransaction(2000, 8, 10000); // "Insufficient funds!"
makeTransaction(500, 10, 5000); // "You ordered 10 droids, you have 0 credits left"
//Block else ... if

let cost;
const subscription = 'premium';

if (subscription === 'free') {
  cost = 0;
} else if (subscription === 'pro') {
  cost = 100;
} else if (subscription === 'premium') {
  cost = 500;
} else {
  console.log(`Invalid subscription type - ${subscription}`);
}

console.log(cost); // 500

//Task 19
// The checkPassword (Password) feature receives a user password to the Password parameter, checks it on a match with the administrator password in the ADMIN_PASSWORD variable and returns a comparison result stored in the Message variable.

// If the value of the Password parameter is NULL, then the user canceled the operation and the message "Canceled by User!" Is recorded in Message.
// If the Password parameter value matches the Admin_Password value, the "Welcome!" String is assigned to the Message variable.
// If none of the previous conditions has been executed, the "Access Denied, Wrong Password!" Row is written to the Message variable.
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    // Change this line
    message = 'Canceled by user!';
  } else if (ADMIN_PASSWORD === password) {
    // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}
checkPassword('mangohackzor'); // "Access denied, wrong password!"
checkPassword(null); //"Canceled by user!"
checkPassword('polyhax'); // "Access denied, wrong password!"
checkPassword('jqueryismyjam'); // "Welcome!"

//Task 20
// The Checkstorage feature (Available, Ordered) checks the possibility of placing the order and returns a message on the result. It declares two parameters whose values ​​will be set during its call.

// Available - Available amount of goods in stock
// Ordered - units of goods in order
// Using branches add function code so that:

// If there are no products in the order yet, that is, the value of the order parameter is equal to 0, the MESSAGE variable is assigned a string "There Are No Products In The Order!".
// Esley items in the order more than available goods in stock, then the MESSAGE variable is assigned a string "Your Order IS TOO LARGE, There Are Not Enough Items In Stock!".
// Otherwise, the "The Order Is Accepted, Our Manager Will Contact You" is assigned to the Message variable.

function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered === 0) {
    message = 'There are no products in the order!';
  } else if (ordered > available) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else {
    message = 'The order is accepted, our manager will contact you';
  }

  // Change code above this line
  return message;
}
