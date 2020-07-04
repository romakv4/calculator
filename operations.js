const addition = (arg1, arg2) => arg1 + arg2;

const subtraction = (minuend, subtrahend) => minuend - subtrahend;

const multiplication = (multiplicand, multiplier) => multiplicand * multiplier;

const division = (dividend, divider) => dividend / divider;

const exponentiation = (basis, power) => Math.pow(basis, power);

const percent = (base, percent) => base * (percent / 100);

const twoArgsOperations = {
    "+": addition,
    "-": subtraction,
    "*": multiplication,
    "/": division,
    "**": exponentiation,
    "%": percent
}

const getTwoArgsOperation = (selector) => {
    const operation = twoArgsOperations[selector];
    return operation !== undefined ? operation : () => { throw Error("Operation not implemented") };
}

module.exports = { getTwoArgsOperation };
