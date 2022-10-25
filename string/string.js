function ucFirst(str) {
    return str = str[0].toUpperCase() + str.slice(1)
}

console.log(ucFirst("вася"));

function checkSpam(str) {
    return (str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx"));
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));

function truncate(str, maxlength) {
    if (str.length <= maxlength) {
        return str;
    } else {
        return (str.substr(0, 19) + "…");
    }

}

console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(truncate("Всем привет!", 20));


function showVerticalMessage(str) {
    if (str[0] === "м") {
        str = str[0].toUpperCase() + str.slice(1);
    }
    let result = (str.length <= 10) ? str : str.substr(0, 10);
    for (let symbol of result) {
        console.log(symbol);
    }
    return "";
}

console.log(showVerticalMessage('марафон'));
console.log(showVerticalMessage('матро123456789'));
console.log(showVerticalMessage('длинноеслово'));