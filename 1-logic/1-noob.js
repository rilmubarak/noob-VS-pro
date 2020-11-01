function toAccounting(n) {
    if (n < 0) {
        return '(' + Math.abs(n) + ')'
    } else if (n >= 0) {
        return n
    }
}


console.log(toAccounting(undefined))
console.log(toAccounting(0))
console.log(toAccounting(9))
console.log(toAccounting(-7))

/** What's wrong?
 * 1. else if no longer need logic in it
 * 2. writing return should be shortened
 * 3. The number returned must be a string
 * 4. if you add '.toString ()' the coding will be error
 */