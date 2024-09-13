function isSameType(value1, value2) {
    const num1 = Number(value1);
    const num2 = Number(value2);

    if (isNaN(num1) && isNaN(num2)) {
        return true;
    }

    if (typeof value1 === typeof value2 && !isNaN(num1) && !isNaN(num2)) {
        return true;
    }

    return false;
}

let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

