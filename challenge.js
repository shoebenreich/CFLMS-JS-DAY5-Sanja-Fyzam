const getWrapper = document.getElementById("wrapper").innerHTML;
let cars = require("./challenge.json");

for (i = 0; i < cars.length; i++) {
  getWrapper = `<div style="width: 30%;"><img src="./${cars[i].img}><p>${cars[i].brand} ${cars.model}</p></div>`;
}
