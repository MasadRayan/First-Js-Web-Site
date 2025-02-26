document.getElementById("transferMoney-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const accountNumber = document.getElementById("transfer-account-number").value;
    const transferAmount = getInputValueById("transfer-amount");
    const pin = getInputValueById("transfer-pin");
    const confirmPin = getInputValueById("transfer-confirm-pin");
    const mainBalance = getInnerTextById("main-balance");

    if (mainBalance === 0) {
        alert("Insufficient balance!!");
        return;
    }
    if (transferAmount > mainBalance) {
        alert("Insufficient balance");
        return;
    }

    if (accountNumber.length === 11) {
        if (pin === confirmPin) {
            const sum = mainBalance - transferAmount;
            setInnerText("main-balance", sum);

            const container = document.getElementById("transaction-container");

            const div = document.createElement("div");
            div.classList.add("px-3", "py-3", "flex", "justify-between", "items-center", "border", "gap-4", "bg-blue-200", "border-blue-400", "rounded-xl", "shadow-2xl", "mb-4");
            div.innerHTML = `
                <div class="flex justify-between gap-5 items-center">
                    <img class=" w-12 border-gray-400 border-4 rounded-full" src="./images/purse 1.png" alt="">
                    <div>
                        <p class="font-semibold">Money Transfered $${transferAmount} dollar from <br> The ${accountNumber} account</p>
                        <p class="text-sm text-gray-700">Today 01:44 AM</p>
                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
                </div>
                `;

            container.appendChild(div);


        }
    }
    else {
        alert("Enter a valid account")
    }
    clearInputFieldById("transfer-account-number");
    clearInputFieldById("transfer-amount");
    clearInputFieldById("transfer-pin");
    clearInputFieldById("transfer-confirm-pin");
})