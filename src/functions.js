
const capitalize = (str) => {
  let arr = str.split('');
  arr[0] = arr[0].toUpperCase()
  return arr.join('');
}

const reverseString = (str) => {
  let arr = str.split('')
  let secondArr = [];
  for (let i = arr.length -1; i >= 0; i--) {
    secondArr.push(arr[i])
  }

  return secondArr.join('')
}

const calculator = (() =>{
  const add = (...args) =>{
    return args.reduce((total,num) => total + num)
  }

  const substract = (num, subsNum) =>{
    return num - subsNum
  }

  return {add, substract}
})()

export {capitalize, reverseString, calculator };