function numberToAccountingString (number) {
    if (number == null) return
    if (number < 0) return `(${Math.abs(number)})`
    return number.toString()
}

console.log(numberToAccountingString(undefined));
console.log(numberToAccountingString(0));
console.log(numberToAccountingString(9));
console.log(numberToAccountingString(-7));

/** node:
 * 1. Shorter, Clearly and Perfect.
 * 2. Easy when to maintenance.
 */