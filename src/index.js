module.exports = function getZerosCount(number, base) {
  var bases = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257];
  let divisor = 0; var counter=0;
  for (let i = 0; bases[i] <= base; i++) {
    if (base % bases[i] === 0) divisor = bases[i];
  }
  while(number > 0) {
    number = Math.floor(number  / divisor);
    counter += number;
  }
  return counter;
}
