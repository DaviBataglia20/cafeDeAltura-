/* VARIABLE ARRAY CARRITO */
let carrito = JSON.parse(localStorage.getItem("carrito"));

/* PRODUCTO AÑADIDO */
const producto = document.querySelector(".productoMain");
carrito.forEach(product => {
    const elCafe = document.createElement("div")
    elCafe.classList.add("producto")
    elCafe.innerHTML = `
    <button id = "restar" ><img src="/cafeDeAltura/assets/icons/heroicons-outline_minus-smsubtraccion.png" alt=""></button>
    
    <div class = "cont"><p>1</p></div>

    <button id = "sumar"><img src="/cafeDeAltura/assets/icons/heroicons-outline_plus-smsumar.png" alt=""></button>
    </div>
    <div class = "imagenCafe">
    <img src="${product.img}" alt="${product.name}" style="width: 55.66px; height: 55.66px;">
    </div>
<div class = "detallesCafe">
    <p>${product.name}</p>
    <p>Paquete de café, 250 gr</p>
</div>
<div class = "precioCafe">
<p>${product.price}</p>
</div>`
    producto.append(elCafe);
})


/* RECOGER LOS BOTONES DE TIPO DE ENVIO QUE SE VA A UTILIZAR */
const botones = document.getElementsByName("tipoDeEnvio")
for (i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
        if (this.id === "gratis") {
            const tipoEnvio = document.querySelector(".envioTotal>p:last-child")
            tipoEnvio.innerHTML = "GRATIS"
            const precioTotal = precioSubTotal;
            const totalTotal = document.querySelector(".totalTotal>div>p:first-child")
            totalTotal.innerHTML=`${precioTotal},00€`

        } else if (this.id === "pago") {
            const tipoEnvio = document.querySelector(".envioTotal>p:last-child")
            const envioPago = 9;
            tipoEnvio.innerHTML=`${envioPago},00€`
            const precioTotal = precioSubTotal + envioPago;
            const totalTotal = document.querySelector(".totalTotal>div>p:first-child")
            totalTotal.innerHTML=`${precioTotal},00€`
        }
    });
}


/* CANTIDAD EN LA CESTA */
const cestaCantidad = document.querySelector(".carrito>h2")
let carritoNum = carrito.length;
cestaCantidad.innerHTML = `Cesta (${carritoNum})`

                /* TODO BIEN HASTA AQUI */


/* OBTENER LOS BOTONES DE SUMAR CANTIDAD */
const botonSumar = document.querySelectorAll("#sumar")
const botonRestar = document.querySelectorAll("#restar")
const precioCoffe = document.querySelector(".precioCafe>p").innerHTML
const cestaNum = document.querySelector(".sesion")
botonRestar.forEach((boton,i) =>{  
    boton.addEventListener("click",()=>{
        if(Number(boton.nextElementSibling.childNodes[0].innerText) > 1){
            boton.nextElementSibling.childNodes[0].innerText--
            let cantidadProdu = Number(boton.nextElementSibling.childNodes[0].innerText)
            console.log(cantidadProdu)
            const nameCafe = boton.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerText
            let indexCanti = carrito.findIndex(ele => ele.name === nameCafe)
            carrito[indexCanti].quantity--
            localStorage.setItem("carrito",JSON.stringify(carrito))
        }else{
            boton.parentElement.remove()
            const nameCafe = boton.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerText
            let indexCanti = carrito.findIndex(ele => ele.name === nameCafe)
            carrito.splice(indexCanti,1)
            localStorage.setItem("carrito",JSON.stringify(carrito))
            let filtrarCarrito = carrito.filter((e)=>e.name !== nameCafe)
            carrito = filtrarCarrito;
            cestaCantidad.innerHTML = `Cesta (${carrito.length})`
        }
    })

})
botonSumar.forEach(boton =>{
    boton.addEventListener("click",()=>{
        boton.nextElementSibling.childNodes[0].innerText++
    })
})



arrPrecioCada = []
carrito.forEach(precioP =>{
    arrPrecioCada.push(precioP.price.match(/\d/g).join('') / 100)
})

function añadirArray (carrito){
    

}
arrCantidad = [];
carrito.forEach(product =>{
    arrCantidad.push(product.quantity)
})
console.log(arrCantidad,arrPrecioCada)

let preciosMultiplicados = [];

for(i = 0 ; i < arrCantidad.length;i++){
    preciosMultiplicados.push()
}
/* PRECIO SUB-TOTAL Y TOTAL */
const valores = []; 
carrito.forEach(precio => {
    valores.push(parseInt(precio.price))
})
precioSubTotal = 0;
for (i = 0; i < valores.length; i++) {
    precioSubTotal += valores[i]
}





const precioSubTotalHtml = document.querySelector(".subTotal>p:last-child")
precioSubTotalHtml.innerText = `${precioSubTotal},00€`

    /* TOTAL TOTAL */
const precioTotal = precioSubTotal;
const totalTotal = document.querySelector(".totalTotal>div>p:first-child")
totalTotal.innerHTML=`${precioTotal},00€`

/* RECOGER LA CANTIDAD DE CADA PRODUCTO */
arrContador = [];
const divCantidad = document.querySelectorAll(".cont>p");
divCantidad.forEach(p =>{
    arrContador.push(p)
})
for(let i = 0; i < arrContador.length; i++) {
    constTexto = arrContador[i];
    constTexto.innerHTML = `${parseInt(arrCantidad[i])}`
}





/* let precio = boton.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[0].innerText
let precioNum = precio.match(/\d/g).join('') / 100; */