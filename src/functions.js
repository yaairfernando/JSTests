
const capitalize = (str) => {
  let arr = str.split('');
  arr[0] = arr[0].toUpperCase()
  return arr.join('');
}

export default capitalize;