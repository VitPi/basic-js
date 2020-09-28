const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    // let monthNumber = date.getMonth(),  // число месяца от 0 до 11
    //     day = date.getDate()

    if (date === null) {
       return new AssertionError(`expected null to equal 'THROWN'`)
    }

    if (arguments.length) {
        switch (date.getMonth()) {
            case 11:
            case 0:
            case 1:
                return 'winter'
            case 2:
            case 3:
            case 4:
                return 'spring'
            case 5:
            case 6:
            case 7:
                return 'summer'
            default:
                return 'autumn'
        }
    } else {
        return 'Unable to determine the time of year!'
    }


    // console.log( date)
    //
    // console.log(monthNumber)
    // console.log(day)


};


// const dat = new Date(1994, 1, 26, 3, 0, 11, 500);


// const dat = new Date(2019, 11, 22, 23, 45, 11, 500);
// const dat = new Date(1996999769943);


// module.exports()


//     ==============================       Декабрь 11, январь 0 и февраль 1 – это winter ---- зима
//     ==============================       Март 2, апрель 3 и май 4 – это spring  ---  весна
//     ==============================       Июнь 5, июль 6 и август 7  – это summer --- лето
//     ==============================       Сентябрь 8, октябрь 9 и ноябрь 10 – это fall --- осень



















