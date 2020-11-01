function numberToAccountingString(number) {
    if (number != null) {
        if (number < 0) {
            return `(${Math.abs(number)})`
        } else {
            return number.toString()
        }
    }
}

console.log(numberToAccountingString(undefined));
console.log(numberToAccountingString(0));
console.log(numberToAccountingString(9));
console.log(numberToAccountingString(-7));

/** node:
 * 1. More better than before
 * 2. The number returned string
 */