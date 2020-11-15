var btnCalculator = document.getElementById("btn_calculator");
btnCalculator.addEventListener("click",
function () {
  var element = document.getElementById("ticket");
  element.classList.remove("hidden");
  element.classList.add("show");

  var kilometersRaw = document.getElementById("kilometers").value;
  var kilometers = parseInt(kilometersRaw);
  var price = kilometers * 0.21;

  var name = document.getElementById("name_user").value;
  document.getElementById("name_ticket").innerHTML = name;

  var passengerCarGenerator = Math.floor(Math.random() * 9) + 1;
  document.getElementById("passenger_car").innerHTML = passengerCarGenerator;

  var cpGenerator = Math.floor(Math.random() * 10000) + 90000;
  document.getElementById("cp").innerHTML = cpGenerator;

  var age = document.getElementById("age_user").value;
  if (age == "young") {
    var discountYoungCalcRaw = (price * 20) / 100;
    var discountYoungCalc = price - discountYoungCalcRaw;
    var discountYoung = discountYoungCalc.toFixed(2);
    document.getElementById("discount_ticket").innerHTML = "Sconto minorenne";
    document.getElementById("price_ticket").innerHTML = discountYoung;
  } else if (age == "adult") {
    document.getElementById("discount_ticket").innerHTML = "Per questa fascia di età, non è previsto nessuno sconto";
    document.getElementById("price_ticket").innerHTML = price;
  } else if (age == "over") {
    var discountOldCalcRaw = (price * 40) / 100;
    var discountOldCalc = price - discountOldCalcRaw;
    var discountOld = discountOldCalc.toFixed(2);
    document.getElementById("discount_ticket").innerHTML = "Sconto over 65";
    document.getElementById("price_ticket").innerHTML = discountOld;
  }
});

var btnReset = document.getElementById("btn_reset");
btnReset.addEventListener("click",
function () {
  var elementReset = document.getElementById("ticket");
  elementReset.classList.remove("show");
  elementReset.classList.add("hidden");

  document.getElementById("name_user").value = "";
  document.getElementById("kilometers").value = "";
  document.getElementById("age_user").value = "";

  document.getElementById("name_ticket").innerHTML = "";
  document.getElementById("discount_ticket").innerHTML = "";
  document.getElementById("passenger_car").innerHTML = "";
  document.getElementById("cp").innerHTML = "";
  document.getElementById("price_ticket").innerHTML = "";
});
