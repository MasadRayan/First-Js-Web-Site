document.getElementById('withdrawMoney-btn').addEventListener("click", function (event) {
    event.preventDefault();
    const cashOutAmount = getInputValueById("cashout-amount");
    const pin = getInputValueById("cashout-pin");
    const confirmPin = getInputValueById("cashout-confirm-pin");
    const mainBalance = getInnerTextById("main-balance");
    const agentNumber = document.getElementById("agent-number").value;

    if (mainBalance === 0) {
        alert("Insufficient balance!!");
        return;
    }
    if (cashOutAmount > mainBalance) {
        alert("Please enter valid number");
        return;
    }

    if (agentNumber.length === 11) {
        if (pin === confirmPin) {
            const subtract = mainBalance - cashOutAmount;
            setInnerText("main-balance", subtract);

            const container = document.getElementById("transaction-container");

            const div = document.createElement("div");
            div.classList.add("px-3", "py-3", "flex",  "justify-between", "items-center", "border", "gap-4", "bg-blue-200", "border-blue-400", "rounded-xl", "shadow-2xl", "mb-4");
            div.innerHTML = `
                <div class="flex justify-between gap-5 items-center">
                    <img class=" w-16 border-gray-400 border-4 rounded-full" src="./images/purse 1.png" alt="">
                    <div>
                        <p class="font-semibold">Money cash outed $${cashOutAmount} dollar from The ${agentNumber} account</p>
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
    clearInputFieldById("cashout-amount");
    clearInputFieldById("cashout-pin");
    clearInputFieldById("cashout-confirm-pin");
    clearInputFieldById("agent-number");
})