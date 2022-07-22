
// For Firefox. Clear all inputs value when page start or reload
function clearPage() {

    let inputsInForm = document.querySelectorAll("input");
    for (element of inputsInForm) {
        element.value = "";
    }

}

// Calculate summ of all banknots
function calcSumm(input, lb1, lb2) {

    let totalLabel = document.querySelector("#totalLb");
    let linkToInput = input;
    let denomeOfBanknote = lb1;
    let banknoteTotal = lb2;

    let totalSumm = (Number(totalLabel.textContent) - Number(banknoteTotal.textContent)) + linkToInput.value * denomeOfBanknote.textContent;
    totalLabel.textContent = totalSumm.toFixed(2);
    banknoteTotal.textContent = (linkToInput.value * denomeOfBanknote.textContent).toFixed(2);

    linkToInput.addEventListener('keydown', logKey);
}

function logKey(e) {
    console.log(e.code);
  }