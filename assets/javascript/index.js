function produceReport() {
  event.preventDefault();

  let data = [];

  data[0] = data["shed_A"] = parseInt(document.getElementById("shed_A").value);
  data[1] = data["shed_B"] = parseInt(document.getElementById("shed_B").value);
  data[2] = data["shed_C"] = parseInt(document.getElementById("shed_C").value);
  data[3] = data["shed_D"] = parseInt(document.getElementById("shed_D").value);

  let sumData = data.shed_A + data.shed_B + data.shed_C + data.shed_D;

  document.getElementById("outputData").innerHTML += "<Br>";

  document.getElementById("outputData").innerHTML +=
    "<p>Your production in shed A is " + data.shed_A + " litres per day</p>";
  document.getElementById("outputData").innerHTML +=
    "<p>Your production in shed B is " + data.shed_B + " litres per day</p>";
  document.getElementById("outputData").innerHTML +=
    "<p>Your production in shed C is " + data.shed_C + " litres per day</p>";
  document.getElementById("outputData").innerHTML +=
    "<p>Your production in shed D is " + data.shed_D + " litres per day</p>";

  document.getElementById("outputData").innerHTML +=
    "<p>Your total production per day is " + sumData + " litres per day</p>";

  dailyIncome = sumData * 45;

  document.getElementById("outputData").innerHTML += "<Br>";

  document.getElementById("outputData").innerHTML += "<hr>";

  document.getElementById("outputData").innerHTML +=
    "<p>Your total daily income is Ksh. " + dailyIncome + " </p>";

  document.getElementById("outputData").innerHTML += "<hr>";

  weeklyIncome = dailyIncome * 7;

  document.getElementById("outputData").innerHTML +=
    "<p>Your total weekly income is Ksh. " + weeklyIncome + " </p>";

  document.getElementById("outputData").innerHTML += "<hr>";

  document.getElementById("outputData").innerHTML += "<Br>";

  // New price is 49.60
  newDailyIncome = sumData * 49.6;

  incomeJanuary = dailyIncome * 31;
  incomeFebruary = dailyIncome * 29;
  incomeMarch = dailyIncome * 31;
  incomeApril = dailyIncome * 30;
  incomeMay = dailyIncome * 31;
  incomeJune = dailyIncome * 30;
  incomeJuly = dailyIncome * 31;
  incomeAugust = dailyIncome * 31;
  incomeSeptember = dailyIncome * 30;
  incomeOctober = dailyIncome * 31;
  incomeNovember = newdailyIncome * 30;
  incomeDecember = newdailyIncome * 31;
  newIncomeInLeapYear = 366 * 49.6;

  newIncomeInLeapYear = 366 * 49.6;

  incomeJanuaryDifference = newIncomeJanuary - incomeJanuary;
  incomeFebruaryDifference = newIncomeFebruary - incomeFebruary;
  incomeMarchDifference = newIncomeMarch - incomeMarch;
  incomeAprilDifference = newIncomeApril - incomeApril;
  incomeMayDifference = newIncomeMay - incomeMay;
  incomeJuneDifference = newIncomeJune - incomeJune;
  incomeJulyDifference = newIncomeJuly - incomeJuly;
  incomeAugustDifference = newIncomeAugust - incomeAugust;
  incomeSeptemberDifference = newIncomeSeptember - incomeSeptember;
  incomeOctoberDifference = newIncomeOctober - incomeOctober;
  incomeNovemberDifference = newIncomeNovember - incomeNovember;
  incomeDecemberDifference = newIncomeDecember - incomeDecember;

  document.getElementById("outputData").innerHTML +=
    "<h3> Comparison and difference in income per month for different prices </h3>";

  document.getElementById("outputData").innerHTML +=
    "<p>January: At price = Ksh. 45, you earn: Ksh. " +
    incomeJanuary +
    ". At price = 49.60, you earn Ksh. " +
    Math.round(newIncomeJanuary) +
    ". The difference, rounded off to the nearest value, is Ksh. " +
    Math.round(incomeJanuaryDifference) +
    ".</p>";
  document.getElementById("outputData").innerHTML += "\n";
  document.getElementById("outputData").innerHTML +=
    "<p>February: At price = Ksh. 45, you earn: Ksh. " +
    incomeFebruary +
    ". At price = 49.60, you earn Ksh. " +
    Math.round(newIncomeFebruary) +
    ". The difference, rounded off to the nearest value, is Ksh. " +
    Math.round(incomeFebruaryDifference) +
    ".</p>";
  document.getElementById("outputData").innerHTML += "\n";
  document.getElementById("outputData").innerHTML +=
    "<p>March: At price = Ksh. 45, you earn: Ksh. " +
    incomeMarch +
    ". At price = 49.60, you earn Ksh. " +
    Math.round(newIncomeMarch) +
    ". The difference, rounded off to the nearest value, is Ksh. " +
    Math.round(incomeMarchDifference) +
    ".</p>";
  document.getElementById("outputData").innerHTML += "\n";
  document.getElementById("outputData").innerHTML +=
    "<p>April: At price = Ksh. 45, you earn: Ksh. " +
    incomeApril +
    ". At price = 49.60, you earn Ksh. " +
    Math.round(newIncomeApril) +
    ". The difference, rounded off to the nearest value, is Ksh. " +
    Math.round(incomeAprilDifference) +
    ".</p>";
  document.getElementById("outputData").innerHTML += "\n";
  document.getElementById("outputData").innerHTML +=
    "<p>May: At price = Ksh. 45, you earn: Ksh. " +
    incomeMay +
    ". At price = 49.60, you earn Ksh. " +
    Math.round(newIncomeMay) +
    ". The difference, rounded off to the nearest value, is Ksh. " +
    Math.round(incomeMayDifference) +
    ".</p>";
 