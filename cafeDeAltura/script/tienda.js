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
        flecha.classList.toggle('rotate')
        const textoPregunta = flecha.parentElement.nextElementSibling.nextElementSibling
        textoPregunta.classList.toggle("hiddenText")
        const linhazinha = flecha.parentElement.nextElementSibling
        linhazinha.classList.toggle("hiddenDiv")
        linhazinha.classList.remove("linea")
        

    })
})
const formularioinput = document.querySelector("#tel")
formularioinput.addEventListener("focus",()=>{
    const borderForm = document.querySelector(".tel>div")
    borderForm.classList.add("borderNuevo")
})
formularioinput.addEventListener("focusout",()=>{
    const borderForm = document.querySelector(".tel>div")
    borderForm.classList.remove("borderNuevo")
})