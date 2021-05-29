let result;
let operation;
const getOperation = operator => {
  switch (operator) {
    case '+':
      return (operation = 'Sum');
    case '-':
      return (operation = 'Subtract');
    case '*':
      return (operation = 'Multiply');
    case '/':
      return (operation = 'Divide');
    case '%':
      return (operation = 'Remainder');
  }
};
const getSum = (operator, items) => {
  result = 0;
  for (const item of items) {
    result += item;
  }
  getOperation(operator, operation);

  return { result, operation };
};
const getSubtract = (operator, items) => {
  result = 0;
  for (let index = 0; index < items.length; index++) {
    index > 0 ? (result -= items[index]) : (result = items[index]);
  }
  getOperation(operator, operation);
  return { result, operation };
};
const getMultiply = (operator, items) => {
  result = 0;
  for (let index = 0; index < items.length; index++) {
    index > 0 ? (result *= items[index]) : (result = items[index]);
  }
  getOperation(operator);
  return { result, operation };
};
const getDivide = (operator, items) => {
  result = 0;
  for (let index = 0; index < items.length; index++) {
    index > 0 ? (result /= items[index]) : (result = items[index]);
  }
  getOperation(operator);
  return { result, operation };
};
const getRemainder = (operator, items) => {
  result = 0;
  for (let index = 0; index < items.length; index++) {
    if (items.length > 2) {
      return console.log(
        'Entered more than two numbers.Please enter two numbers!!!!!',
      );
    }
    index > 0 ? (result %= items[index]) : (result = items[index]);
  }
  getOperation(operator);
  return { result, operation };
};
let calculate = (operator, ...restArg) => {
  console.log(restArg);
  switch (operator) {
    case '+':
      return getSum(operator, restArg);
    case '-':
      return getSubtract(operator, restArg);
    case '*':
      return getMultiply(operator, restArg);
    case '/':
      return getDivide(operator, restArg);
    case '%':
      return getRemainder(operator, restArg);
  }
};
console.log(
  `🚀 :  ~ calculate  operation : ${Object.operation} --- result : `,
  calculate('+', 4, 5, 6, 7),
);
console.log(`🚀  ~ calculate `, calculate('+', 4, 5, 6, 7));
console.log(`🚀  ~ calculate `, calculate('-', 4, 5, 6, 7));
console.log(`🚀  ~ calculate `, calculate('*', 4, 5, 6, 7));
console.log(`🚀  ~ calculate `, calculate('/', 4, 5, 6, 7));
console.log(`🚀  ~ calculate `, calculate('%', 8, 3, 7, 10));
console.log(`🚀  ~ calculate `, calculate('%', 8, 3));
console.log(`🚀  ~ calculate `, calculate('%', 1, 7));
console.log(`🚀  ~ calculate `, calculate('%', 2, 7));
console.log(`🚀  ~ calculate `, calculate('%', 3, 7));

console.log(
  'result :',
  calculate('+', 4, 5, 6, 7),
  `~ calculate  operation : ${operation} `,
);

//! Guard Klause
//Task-01
function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return 'You are an adult';
  }

  return 'You are a minor';
}
//Task-02
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return 'Welcome!';
  }
  return 'Access denied, wrong password!';

  // Change code above this line
}
//Task-03
function checkStorage(available, ordered) {
  // Change code below this line
  if (ordered === 0) {
    return 'Your order is empty!';
  }
  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }
  return 'The order is accepted, our manager will contact you';
}

const fruits = ['apple', 'plum', 'pear', 'orange'];
