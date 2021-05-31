function formatMessage(message, maxLength) {
  let result;
  result =
    message.length >= maxLength
      ? message.slice(0, maxLength - 1) + '...'
      : message;
  return result;
}
const a = formatMessage('Lorem ipsum dolor sit amet.', 5);
console.log(a);
