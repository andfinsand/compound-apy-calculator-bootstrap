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
        var apy = (amount * (1+rate)**time) - amount
        var totalAmount = apy + amount
    }
    document.getElementById('interest_earned').innerHTML = apy;
    document.getElementById('totalValue').innerHTML = totalAmount;
}
