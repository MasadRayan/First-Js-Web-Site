document.getElementById("cupon-btn").addEventListener("click", function (event) {
    event.preventDefault();

    const bonusPin = document.getElementById("bonus-cupon").value;

    if (bonusPin === "masad1234") {
        alert("You got a bonus");

        const container = document.getElementById("transaction-container");

        const div = document.createElement("div");
        div.classList.add("px-3", "py-3", "flex", "justify-between", "items-center", "border", "gap-4", "bg-blue-200", "border-blue-400", "rounded-xl", "shadow-2xl", "mb-4");
        div.innerHTML = `
                <div class="flex justify-between gap-5 items-center">
                    <img class=" w-12 border-gray-400 border-4 rounded-full" src="./images/financial 1.png" alt="">
                    <div>
                        <p class="font-semibold">Used a cupon</p>
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
        alert("You gave a wrong cupon");
    }
})