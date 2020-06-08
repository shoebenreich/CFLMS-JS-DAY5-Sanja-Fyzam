let getWrapper = document.getElementById("wrapper");

for (i = 0; i < cars.length; i++) {
    getWrapper.innerHTML += `<div class="container"><img src="${cars[i].img}"><div><p>${cars[i].brand} ${cars[i].model}</p></div></div>`;
    // console.log(cars[i].brand, cars[i].model)
}
