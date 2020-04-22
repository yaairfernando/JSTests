
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

  const multiply = (...args) =>{
    return args.reduce((total,num) => total * num)
  }

  const substract = (num, subsNum) =>{
    return num - subsNum
  }

  const divide = (a, b) =>{
    return a / b
  }

  return {add, substract, divide, multiply}
})()

const analyze = (arr) => {
  let average = arr.reduce((prev, curr, index, arr) => {
    prev += curr;
    if(index === arr.length -1){
        return prev / arr.length;
    }else{
        return prev;
    }
  }, 0)

  let min = Math.min.call(null, ...arr);
  let max = Math.max.call(null, ...arr);
  let length = arr.length;
  return {average, min, max, length}
}


export {capitalize, reverseString, calculator, analyze };