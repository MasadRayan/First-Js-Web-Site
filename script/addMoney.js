document.getElementById('addMoney-btn')
    .addEventListener('click', function (event) { 
        event.preventDefault();
        const addAmount = document.getElementById('amount').value ;
        const convertedAmount = parseInt(addAmount);
        const pin = document.getElementById('pin').value;
        const convertedPin = parseInt(pin);
        const mainBalance = document.getElementById("main-balance").innerText;
        const convertedMainBalance = parseFloat(mainBalance);
        const confirmPin = document.getElementById('confirm-pin').value;
        const convertedConfirmPin = parseInt(confirmPin);
        const accountNumber = document.getElementById('account-number').value;


        if (accountNumber.length === 11) {
            if (convertedPin === convertedConfirmPin) {
                const sum = convertedMainBalance+convertedAmount;
                document.getElementById("main-balance").innerText = sum;
            }
            else {
                alert("Give the correct PIN")   ;
            }
        }
        else {
            alert("Give valid account");
            
        }
        addAmount.value = '';
    })