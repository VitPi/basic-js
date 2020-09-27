const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    let a = [];

    if (Array.isArray(members)) {
        for (let i of members) {
            if (typeof i === 'string') {
                let j = i.trim()
                a.push(j[0].toUpperCase())
            }
        }
        return a.sort().join('')
    }
    return false
};


