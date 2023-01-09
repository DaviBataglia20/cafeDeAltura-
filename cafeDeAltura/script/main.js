const logo = document.querySelector("div.logo");
const logoText = document.querySelector("div.logo>p");
const logoImage = document.querySelector("div.logo>img");
console.log(logo);
console.log(logoText);
console.log(logoImage);
const iconBuyed = document.querySelector("div.bolsa>img");
console.log(iconBuyed);
const coffesName = document.querySelectorAll(".textosCafe>h2")
coffesName.forEach(element => console.log(element.innerText));
const coffesPrices = document.querySelectorAll(".textosCafe>p")
coffesPrices.forEach(element => console.log(element.innerText));
const coffesUrlS = document.querySelectorAll(".carta-cafe>img");
coffesUrlS.forEach(element => console.log(element.src));
const coffeCards = document.querySelectorAll('.carta-cafe')
coffeCards.forEach(carta => {
    console.log(`El café ${carta.children[1].children[0].innerText} tiene la imagen ${carta.children[0].currentSrc} y un precio de ${carta.children[1].children[1].innerText}`)
});
const laTienda = document.querySelector(".fotoTexto>img");
console.log(laTienda);
const coffeForm = document.querySelectorAll(".cajaForm>div");
arr = [];
for(i of coffeForm){
    arr.push(i.children[1])
}
const telForm = document.querySelector(".telefonoMainForm>input");
const termForm = document.querySelector(".terms>input");
arr.splice(2,1,telForm);
arr.pop();
arr.push(termForm);
console.log(arr);















