module.exports = function multiply(first, second) {

    if (second.length > first.length) {
        const tmpStr = first;
        first = second;
        second = tmpStr;
    }

    // TODO: Consider to improve the algo for numbers with ending 'zero' (if the time will let)
    let lvlSecond = 0;
    let resultNum = '0';
    for (let i = second.length - 1; i >= 0; i--, lvlSecond++) {
        const num1 = Number(second.charAt(i));
        let lvlFirst = 0;
        let inMind = 0;
        let finalNum = '';
        for (let x = first.length - 1; x >= 0; x--, lvlFirst++) {
            const num2 = Number(first.charAt(x));
            let res = num1 * num2 + inMind;
            inMind = 0;

            if (res > 9) {
                inMind = Math.floor(res / 10);
                res = res % 10;
            }

            finalNum = res.toString() + finalNum;

            if (x === 0 && inMind > 0) {
                finalNum = inMind + finalNum;
                inMind = 0;
            }
        }

        for (let zeros = 0; zeros < lvlSecond; zeros++) {
            finalNum += '0';
        }

        resultNum = addition(resultNum, finalNum);
    }

    return resultNum;
}

function addition(strNum1, strNum2) {

    let tmpSum = '';

    if (strNum1.length !== strNum2.length) {
        if (strNum1.length < strNum2.length) {
            const tmpStr = strNum1;
            strNum1 = strNum2;
            strNum2 = tmpStr;
        }
        strNum2 = '0'.repeat(strNum1.length - strNum2.length) + strNum2;
    }

    let inMind = 0;
    for (let i = strNum1.length - 1; i >= 0; i--) {
        const num1 = Number(strNum1.charAt(i));
        const num2 = Number(strNum2.charAt(i));
        let sum = num1 + num2 + inMind;
        inMind = 0;

        if (sum > 9) {
            inMind = Math.floor(sum / 10);
            sum = sum % 10;
        }

        tmpSum = sum.toString() + tmpSum;

        if (i === 0 && inMind > 0) {
            tmpSum = inMind + tmpSum;
            inMind = 0;
        }
    }

    return tmpSum;
}