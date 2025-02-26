document.getElementById("billPay-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const billerAccount = document.getElementById("biller-account-number").value;
    const billAmmount = getInputValueById("bill-amount");
    const pin = getInputValueById("bill-pin");
    const confirmPin = getInputValueById("bill-confirm-pin");
    const mainBalance = getInnerTextById("main-balance");
    const allBills = document.getElementById("allBills").value;

    if (mainBalance === 0) {
        alert("You can't withdraw money anymore!!");
        return;
    }
    if (billAmmount > mainBalance) {
        alert("Please enter valid number");
        return;
    }

    if (billerAccount.length === 11) {
        if (pin === confirmPin) {
            const sum = mainBalance - billAmmount;
            setInnerText("main-balance", sum);

            const container = document.getElementById("transaction-container");

            const div = document.createElement("div");
            div.classList.add("px-3", "py-3", "flex", "justify-between", "items-center", "border", "gap-4", "bg-blue-200", "border-blue-400", "rounded-xl", "shadow-2xl", "mb-4");
            div.innerHTML = `
                <div class="flex justify-between gap-5 items-center">
                    <img class=" w-16 border-gray-400 border-4 rounded-full" src="./images/purse 1.png" alt="">
                    <div>
                        <p class="font-semibold">Bill payed $${billAmmount} dollar from ${billerAccount} account for 
                        ${allBills} Bill</p>
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
            alert("Wrong PIN");
        }
    }
    else {
        alert("Please enter a valid Account");
    }
    clearInputFieldById("allBills");
    clearInputFieldById("biller-account-number");
    clearInputFieldById("bill-amount");
    clearInputFieldById("bill-pin");
    clearInputFieldById("bill-confirm-pin");
})