const repeatString = function (string, num) {

    let resultStr = '';
    if (num < 0) {
        return 'ERROR';

    } else {
        for (let i = 0; i < num; i++) {
            resultStr += string;
        }

        return resultStr;
    }
};

// Do not edit below this line
module.exports = repeatString;
