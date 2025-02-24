document.getElementById('withdrawMoney-btn').addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = document.getElementById("cashout-amount").value;
    const convertAmount = parseInt(cashOutAmount);
    const pin = document.getElementById('cashout-pin').value;
    const convertedPin = parseInt(pin);
    const confirmPin = document.getElementById('cashout-confirm-pin').value;
    const convertedConfirmPin = parseInt(confirmPin);
    const mainBalance = document.getElementById("main-balance").innerText;
    const convertedMainBalance = parseFloat(mainBalance);

    if (convertedPin === convertedConfirmPin) {
        const subtract = convertedMainBalance - convertAmount;
        document.getElementById("main-balance").innerText = subtract;
        if (mainBalance === "0") {
            alert("You can't withdraw money anymore!!");
            mainBalance = "0"
        }
    }
    else {
        alert("Give the correct PIN")   ;
    }
})