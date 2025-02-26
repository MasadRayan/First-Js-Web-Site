document.getElementById('addMoney-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const accountNumber = document.getElementById('account-number').value;
        const addAmount = getInputValueById("amount");
        const pin = getInputValueById("pin");
        const confirmPin = getInputValueById("confirm-pin");
        const mainBalance = getInnerTextById("main-balance");
        const allBanks = document.getElementById("allBank").value;

        if (addAmount < 0) {
            alert("Please enter valid number");
            return;
        }
        if (accountNumber.length === 11) {
            if (pin === confirmPin) {
                const sum = mainBalance + addAmount;
                setInnerText("main-balance", sum);

                const container = document.getElementById("transaction-container");

                const div = document.createElement("div");
                div.classList.add("px-3", "py-3", "flex","justify-between", "items-center", "border", "gap-4", "bg-blue-200",  "border-blue-400",  "rounded-xl",  "shadow-2xl", "mb-4");
                div.innerHTML = `
                <div class="flex justify-between gap-5 items-center">
                    <img class=" w-16 border-gray-400 border-4 rounded-full" src="./images/purse 1.png" alt="">
                    <div>
                        <p class="font-semibold">Money added $${addAmount} dollar from The ${accountNumber} account from 
                        ${allBanks}</p>
                        <p class="text-sm text-gray-700">Today 01:44 AM</p>
                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i>
                </div>
                `;
                
                container.appendChild(div);
            }
            else {
                alert("Give the correct PIN");
            }
        }
        else {
            alert("Give valid account");
        }
        clearInputFieldById("account-number");
        clearInputFieldById("amount");
        clearInputFieldById("pin");
        clearInputFieldById("confirm-pin")
        clearInputFieldById("agent-number");
        clearInputFieldById("allBank");
    })