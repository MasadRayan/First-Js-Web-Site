document.getElementById('cashoutSection').style.display = "none";


document.getElementById('add-money-box').addEventListener("click" , function() {
    document.getElementById('addMoneySection').style.display = "block";
    document.getElementById('cashoutSection').style.display = "none";

})

document.getElementById('cash-out-box').addEventListener("click" , function(){
    document.getElementById('addMoneySection').style.display = "none";
    document.getElementById('cashoutSection').style.display = "block";
})