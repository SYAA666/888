module.exports = function getZerosCount(number, base) {
    let prim = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257];
    let maximalDevisor = 0
    for (let i = 0; prim[i] <= base; i++) {
        if (base % prim[i] === 0) {
            maximalDevisor = prim[i]
        }
    }
    let degr = 0, tmp = base
    while (tmp % maximalDevisor === 0) {
        degr++
        tmp /= maximalDevisor
    }
    console.log(maximalDevisor)
    let count = 0
    while(number > 0) {
        number = Math.floor(number  / maximalDevisor);
        count += number;
    }
    return Math.floor(count / degr);
}