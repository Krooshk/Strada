function Calc(operator, a, b) {
    operations = {
        "sum": Number(a) + Number(b),
        "sub": Number(a) - Number(b),
        "multi": Number(a) * Number(b),
        "div": Number(a) / Number(b),
        "mod": Number(a) % Number(b),
        "degree": Number(a) ** Number(b)
    }
    let isNumberA = (typeof(a) === "number");
    let isNumberB = (typeof(b) === "number");
    let hasUndefinedParams = (a == undefined || b == undefined || operator == undefined);
    if (hasUndefinedParams || !isNumberA || !isNumberB) {
        return "Error";
    } else if (operator in operations) {
        return operations[operator];
    } else return "unknown operation"
}

console.log(Calc("sum", 17));
console.log(Calc(23, 17));
console.log(Calc("qwer", 23, 17));

console.log(Calc("sum", 23, 17));
console.log(Calc("sub", 120, 80));
console.log(Calc("multi", 10, 4));
console.log(Calc("div", 1200, 30));
console.log(Calc("mod", 140, 50));
console.log(Calc("degree", 6, 2));

console.log(Calc("sum", "d", 17));
console.log(Calc("sum", 23, "d"));