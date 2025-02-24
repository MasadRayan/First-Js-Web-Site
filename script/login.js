document.getElementById('login-btn')
    .addEventListener('click', function (event) { 
        event.preventDefault();
        const accountNumber = document.getElementById('account-number').value;
        const pin = document.getElementById('pin').value;
        const confirmPin = document.getElementById('confirm-pin').value;
        if (accountNumber.length === 11) {
            if (pin === confirmPin) {
                window.location.href="./main.html";
                
            }
            else {
                alert("Give the correct PIN")   ;
            }
        }
        else {
            alert("Give valid account");
            
        }
        
})