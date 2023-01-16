const botones = document.querySelectorAll(".carta-cafe>button");
// console.log(botones);

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

botones.forEach(boton =>{
    boton.addEventListener("click",() =>{
        const cafeImg = boton.previousElementSibling.previousElementSibling.getAttribute("src");
        const cafeName = boton.previousElementSibling.children[0].innerHTML;
        const cafePrice = boton.previousElementSibling.children[1].innerHTML;
        // console.log(cafeImg,cafeName,cafePrice)
        const cafe = {
            quantity: 1,
            img:`${cafeImg}`,
            name:`${cafeName}`,
            price:`${cafePrice}`,
        }
    
        if(carrito.find(e=>e.name === cafe.name)){
            let i = carrito.indexOf(carrito.find(e=>e.name === cafe.name))
            carrito[i].quantity += 1;
            localStorage.setItem("carrito",JSON.stringify(carrito))
        }else{
            carrito.push(cafe)
            localStorage.setItem("carrito",JSON.stringify(carrito))
        }
        location.reload()
    })
})
if(JSON.parse(localStorage.getItem('carrito'))){
    cicrculitoCanti = document.createElement("div")
    cicrculitoCanti.innerHTML =`<p>${carrito.length}</p>`
    divBolsa = document.querySelector("header>.bolsa")
    divBolsa.append(cicrculitoCanti)
}
const flechaAbriCerrar = document.querySelectorAll("#flechaArriba")
console.log(flechaAbriCerrar)
flechaAbriCerrar.forEach(flecha =>{
    flecha.addEventListener("click",(i)=>{
        const cartaPregunta = flecha.parentElement.parentElement
        const textoPregunta = fleca.parentElement.nextElementSibling.nextElementSibling
    })
})