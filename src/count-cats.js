const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let number = 0;
    for (let i of matrix) {
        for (let a of i) {
            if (a === '^^') {
                number++
            }
        }
    }
    return number
};


