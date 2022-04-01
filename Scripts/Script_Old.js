let totalPerson = document.getElementById("totalResult");
let totalTip = document.getElementById("tipAmount");
const billAmount = parseFloat(document.getElementById("Bill").value);
const customTip = parseFloat(document.getElementById("custom").value);
const peopleNumber = parseFloat(document.getElementById("people").value);

function tipCalc() {
                                         
    customTip = customTip / 100;

    let resultTip = billAmount * customTip;
    let resultPeople = billAmount + resultTip;

    let tipPerpeople = (resultTip / peopleNumber).toFixed(2);
    let amountPerpeople = (resultPeople / peopleNumber).toFixed(2);

    totalPerson.innerHTML = "$ " + amountPerpeople;
    totalTip.innerHTML = "$ " + tipPerpeople;
document.addEventListener("input", tipCalc);
}
function reset() {
    let totalPerson = document.getElementById("totalResult");
    let totalTip = document.getElementById("tipAmount");
    const billAmount = parseFloat(document.getElementById("Bill").value);
    const customTip = parseFloat(document.getElementById("custom").value);
    const peopleNumber = parseFloat(document.getElementById("people").value);

    billAmount.innerHTML = "$0.00";
    customTip.innerHTML = "$0.00";
    peopleNumber.innerHTML = "$0.00";
    totalPerson.innerHTML = "$0.00";
    totalTip.innerHTML = "$0.00";
}