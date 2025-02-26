handleToggle("cashoutSection" , "none");
handleToggle("transection-history" , "none");
handleToggle("transfer-money-section" , "none");
handleToggle("get-bonus" , "none");
handleToggle("pay-bill-section", "none");


document.getElementById('add-money-box').addEventListener("click", function () {
    sectionBackgroundColor("add-money-box","lightblue");
    sectionBackgroundColor("cash-out-box","transparent");
    sectionBackgroundColor("transection-box","transparent");
    sectionBackgroundColor("transfer-money-box","transparent");
    sectionBackgroundColor("get-bonus-box" , "transparent");
    sectionBackgroundColor("pay-bill-box", "transparent");
    handleToggle("addMoneySection", "block");
    handleToggle("cashoutSection" , "none");
    handleToggle("transection-history","none");
    handleToggle("transfer-money-section" , "none");
    handleToggle("get-bonus" , "none");
    handleToggle("pay-bill-section", "none");


})

document.getElementById('cash-out-box').addEventListener("click", function () {
    sectionBackgroundColor("add-money-box","transparent");
    sectionBackgroundColor("cash-out-box","lightblue");
    sectionBackgroundColor("transection-box","transparent");
    sectionBackgroundColor("transfer-money-box","transparent");
    sectionBackgroundColor("get-bonus-box" , "transparent");
    sectionBackgroundColor("pay-bill-box", "transparent");
    handleToggle("cashoutSection", "block");
    handleToggle("addMoneySection", "none");
    handleToggle("transection-history","none");
    handleToggle("transfer-money-section" , "none");
    handleToggle("get-bonus" , "none");
    handleToggle("pay-bill-section", "none");


})

document.getElementById("transection-box").addEventListener("click", function() {
    handleToggle("cashoutSection", "none");
    handleToggle("addMoneySection", "none");
    handleToggle("transfer-money-section" , "none");
    handleToggle("get-bonus" , "none");
    handleToggle("pay-bill-section", "none");
    handleToggle("transection-history","block");
    sectionBackgroundColor("add-money-box","transparent");
    sectionBackgroundColor("cash-out-box","transparent");
    sectionBackgroundColor("transfer-money-box","transparent");
    sectionBackgroundColor("get-bonus-box" , "transparent");
    sectionBackgroundColor("pay-bill-box", "transparent");
    sectionBackgroundColor("transection-box","lightblue");
})

document.getElementById("transfer-money-box").addEventListener("click", function() {
    handleToggle("cashoutSection", "none");
    handleToggle("addMoneySection", "none");
    handleToggle("transection-history","none");
    handleToggle("get-bonus" , "none");
    handleToggle("pay-bill-section", "none");
    handleToggle("transfer-money-section" , "block");
    sectionBackgroundColor("add-money-box","transparent");
    sectionBackgroundColor("cash-out-box","transparent");
    sectionBackgroundColor("transection-box","transparent");
    sectionBackgroundColor("get-bonus-box" , "transparent");
    sectionBackgroundColor("pay-bill-box", "transparent");
    sectionBackgroundColor("transfer-money-box","lightblue");
})

document.getElementById("get-bonus-box").addEventListener("click", function() {
    handleToggle("cashoutSection", "none");
    handleToggle("addMoneySection", "none");
    handleToggle("transection-history","none");
    handleToggle("transfer-money-section" , "none");
    handleToggle("pay-bill-section", "none");
    handleToggle("get-bonus" , "block");
    sectionBackgroundColor("add-money-box","transparent");
    sectionBackgroundColor("cash-out-box","transparent");
    sectionBackgroundColor("transection-box","transparent");
    sectionBackgroundColor("pay-bill-box", "transparent");
    sectionBackgroundColor("transfer-money-box","transparent");
    sectionBackgroundColor("get-bonus-box" , "lightblue");
})

document.getElementById("pay-bill-box").addEventListener("click", function() {
    handleToggle("cashoutSection", "none");
    handleToggle("addMoneySection", "none");
    handleToggle("transection-history","none");
    handleToggle("transfer-money-section" , "none");
    handleToggle("get-bonus" , "none");
    handleToggle("pay-bill-section", "block");
    sectionBackgroundColor("add-money-box","transparent");
    sectionBackgroundColor("cash-out-box","transparent");
    sectionBackgroundColor("transection-box","transparent");
    sectionBackgroundColor("transfer-money-box","transparent");
    sectionBackgroundColor("get-bonus-box" , "transparent");
    sectionBackgroundColor("pay-bill-box", "lightblue");
})
