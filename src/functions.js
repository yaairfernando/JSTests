
const capitalize = (str) => {
  const arr = str.split('');
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
};

const reverseString = (str) => {
  const arr = str.split('');
  const secondArr = [];
  for (let i = arr.length - 1; i >= 0; i -= 1) {
    secondArr.push(arr[i]);
  }

  return secondArr.join('');
};

const calculator = (() => {
  const add = (...args) => args.reduce((total, num) => total + num);

  const multiply = (...args) => args.reduce((total, num) => total * num);

  const substract = (num, subsNum) => num - subsNum;

  const divide = (a, b) => a / b;

  return {
    add, substract, divide, multiply,
  };
})();

const analyze = (arr) => {
  const average = arr.reduce((prev, curr, index, arr) => {
    prev += curr;
    if (index === arr.length - 1) {
      return prev / arr.length;
    }
    return prev;
  }, 0);

  const min = Math.min.call(null, ...arr);
  const max = Math.max.call(null, ...arr);
  const { length } = arr;
  return {
    average, min, max, length,
  };
};

const caesarCipher = (message, shift) => {
  const arr = message.split('');
  const shifted = arr.map(char => {
    let now = char.charCodeAt(0);
    if (now - shift < 97) {
      now = 123 - (97 - (now - shift));
      return String.fromCharCode(now);
    }
    return String.fromCharCode(now - shift);
  });
  return shifted.join('');
};


export {
  capitalize, reverseString, calculator, analyze, caesarCipher,
};