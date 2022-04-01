let percent5 = document.getElementById("percent5");
let percent10 = document.getElementById("percent10");
let percent15 = document.getElementById("percent15");
let percent25 = document.getElementById("percent25");
let percent50 = document.getElementById("percent50");


function percentClick(percent) {
    const customReset = document.getElementsByName("custom");
    customReset[0].value = 0;
    
    let totalPerson = document.getElementById("totalResult");
    let totalTip = document.getElementById("tipAmount");
    const billAmount = parseFloat(document.getElementById("Bill").value);
    const peopleNumber = parseFloat(document.getElementById("people").value);

    percent = parseFloat(percent.innerHTML) / 100;
    let resultTip = billAmount * percent;
    let resultPeople = billAmount + resultTip;

    let tipPerpeople = (resultTip / peopleNumber).toFixed(2);
    let amountPerpeople = (resultPeople / peopleNumber).toFixed(2);

    if (isNaN(amountPerpeople) && isNaN(tipPerpeople)) {
        totalPerson.innerHTML = "$0.00 ";
        totalTip.innerHTML = "$0.00";
    } else {
        totalPerson.innerHTML = "$" + amountPerpeople;
        totalTip.innerHTML = "$" + tipPerpeople;
    }
}


function tipCalc() {
    let totalPerson = document.getElementById("totalResult");
    let totalTip = document.getElementById("tipAmount");
    const billAmount = parseFloat(document.getElementById("Bill").value);
    let customTip = parseFloat(document.getElementById("custom").value);
    const peopleNumber = parseFloat(document.getElementById("people").value);

    customTip = customTip / 100;

    let resultTip = billAmount * customTip;
    let resultPeople = billAmount + resultTip;

    let tipPerpeople = (resultTip / peopleNumber).toFixed(2);
    let amountPerpeople = (resultPeople / peopleNumber).toFixed(2);

    if (isNaN(amountPerpeople) && isNaN(tipPerpeople)) {
        totalPerson.innerHTML = "$0.00 ";
        totalTip.innerHTML = "$0.00";
    } else {
        totalPerson.innerHTML = "$" + amountPerpeople;
        totalTip.innerHTML = "$" + tipPerpeople;
    }


}
function reset() {
    billAmount.innerHTML = "$0.00";
    customTip.innerHTML = "$0.00";
    peopleNumber.innerHTML = "$0.00";
    totalPerson.innerHTML = "$0.00";
    totalTip.innerHTML = "$0.00";
}