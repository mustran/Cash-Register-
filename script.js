function checkCashRegister(price, cash, cid) {
    let returnPrice = cash - price;
    console.log(returnPrice);
    let resultArray = [];

    cid.reverse();

    let result = {
        status: "",
        change: resultArray
    };

    let total = 0;
    cid.map(el => {
        return (total += el[1]);
    });

    console.log(total);
    if (total == returnPrice) {
        result.status = "CLOSED";
        result.change = cid.reverse();
        return result;
    }
    if (total < returnPrice) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        console.log(result);
        return result;
    }

    cid.map(element => {
        if (element[0] === "ONE HUNDRED") {
            if (returnPrice > element[1]) {
                returnPrice -= element[1];
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            } else {
                let remainder = Math.floor(returnPrice / 100);
                returnPrice -= remainder * 100;
                returnPrice = returnPrice.toFixed(2);
                element[1] = remainder * 100;
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            }
        }
        if (element[0] === "TWENTY") {
            if (returnPrice > element[1]) {
                returnPrice -= element[1];
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            } else {
                let remainder = Math.floor(returnPrice / 20);
                returnPrice -= remainder * 20;
                returnPrice = returnPrice.toFixed(2);
                element[1] = remainder * 20;
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            }
        }
        if (element[0] === "TEN") {
            if (returnPrice > element[1]) {
                returnPrice -= element[1];
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            } else {
                let remainder = Math.floor(returnPrice / 10);
                returnPrice -= remainder * 10;
                returnPrice = returnPrice.toFixed(2);
                element[1] = remainder * 10;
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            }
        }
        if (element[0] === "FIVE") {
            if (returnPrice > element[1]) {
                returnPrice -= element[1];
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            } else {
                let remainder = Math.floor(returnPrice / 5);
                returnPrice -= remainder * 5;
                returnPrice = returnPrice.toFixed(2);
                element[1] = remainder * 5;
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            }
        }
        if (element[0] === "ONE") {
            if (returnPrice > element[1]) {
                returnPrice -= element[1];
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            } else {
                let remainder = Math.floor(returnPrice / 1);
                returnPrice -= remainder * 1;
                returnPrice = returnPrice.toFixed(2);
                element[1] = remainder * 1;
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            }
        }
        if (element[0] === "QUARTER") {
            if (returnPrice > element[1]) {
                returnPrice -= element[1];
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            } else {
                let remainder = Math.floor(returnPrice / 0.25);
                returnPrice -= remainder * 0.25;
                element[1] = remainder * 0.25;
                returnPrice = returnPrice.toFixed(2);
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            }
        }
        if (element[0] === "DIME") {
            if (returnPrice > element[1]) {
                returnPrice -= element[1];
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            } else {
                let remainder = Math.floor(returnPrice / 0.1);
                returnPrice -= remainder * 0.1;
                element[1] = remainder * 0.1;
                returnPrice = returnPrice.toFixed(2);
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            }
        }
        if (element[0] === "PENNY") {
            if (returnPrice > element[1]) {
                returnPrice -= element[1];
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            } else {
                let remainder = Math.floor(returnPrice / 0.01);
                returnPrice -= remainder * 0.01;
                element[1] = remainder * 0.01;
                returnPrice = returnPrice.toFixed(2);
                if (element[1] != 0) {
                    changeTotal += element[1];
                    resultArray.push(element);
                }
            }
        }
    });

    if (returnPrice != 0) {
        result.status = "INSUFFICIENT_FUNDS";
        result.change = [];
        return result;
    }
    if (resultArray.length == 0) {
        result.status = "INSUFFICIENT_FUNDS";
    }
    if (resultArray.length != 0) {
        result.status = "OPEN";
        result.change = resultArray;
    }

    return result;
}

checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);
