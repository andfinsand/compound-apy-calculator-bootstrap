function calculate(element) {

    var x = document.getElementById("net_box");

    // display div box
    if (x.style.display === "none") {
        x.style.display = "block";
    }

    // input values
    var amount = document.getElementById("amount").value;
    var rate = document.getElementById("rate").value / 100;
    var time = document.getElementById("time").value;

    // algorithm variables
    var totalDays = parseInt(time) * 365;

    // calculation algorithm
    if (time > 1) {
        for (var i = 1; i <= totalDays; i++) {
            var yearly = amount * rate;
            var daily = yearly / 365;
            amount = daily + parseInt(amount);
            console.log(amount)
        }
    document.getElementById('totalValue').innerHTML = amount;
    }
    else {
        for (var i = 1; i <= 365; i++) {
            var yearly = amount * rate;
            var daily = yearly / 365;
            amount = daily + parseInt(amount);
        }
    }
    document.getElementById('totalValue').innerHTML = amount;
}