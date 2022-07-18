function produceReport() {
  event.preventDefault();

  let data = [];

  data[0] = data["shed_A"] = parseInt(document.getElementById("shed_A").value);
  data[1] = data["shed_B"] = parseInt(document.getElementById("shed_B").value);
  data[2] = data["shed_C"] = parseInt(document.getElementById("shed_C").value);
  data[3] = data["shed_D"] = parseInt(document.getElementById("shed_D").value);

  let sumData = data.shed_A + data.shed_B + data.shed_C + data.shed_D;

