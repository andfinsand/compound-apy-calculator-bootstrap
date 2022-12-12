function calculate(element) {

    var x = document.getElementById("net_box");

    // display div box
    if (x.style.display === "none") {
        x.style.display = "block";
    }

    // input values
    var amount = parseFloat(document.getElementById("amount").value);
    var rate = parseFloat(document.getElementById("rate").value) / 100.0;
    var time = parseFloat(document.getElementById("time").value);

    // calculation algorithm
    // ((P*(1+i)^n) - P)
    if (time > 1) {
        var interest = (amount * (1+rate)**time) - amount
        var totalAmount = interest + amount
    }
    let interestFixed = interest.toFixed(2)
    let totalAmountFixed = totalAmount.toFixed(2)
    document.getElementById('interest_earned').innerHTML = interestFixed;
    document.getElementById('totalValue').innerHTML = totalAmountFixed;
}
