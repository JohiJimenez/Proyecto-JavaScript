
//Array con los Productos de la Tienda

const productos = [{ id: 1, nombre: 'Acido Ascorbico', precio: 5000 },
{ id: 2, nombre: 'Acido Glicolico', precio: 4500 },
{ id: 3, nombre: 'Polvo de Niacinamida', precio: 6000 }];

//Clase para agregar un producto nuevo a la tienda

class Producto {
    constructor(producto) {
        this.id = producto.id;
        this.nombre = producto.nombre;
        this.precio = producto.precio;
    }
}

const producto = { id: 4, nombre: "Serum de Cafeina", precio: 7000 }
const cafeina = new Producto(producto)
productos.push(cafeina);

/*Funcion para Sumar los Precios del Carrito

function totalCompra(){

    for (let i = 0; i < carritoCompras.length; i++) {

        total = total + carritoCompras[i].precio 
    }
} */

//Inicializando variables y Arrays

let total = 0;
let carritoCompras = [];

//Ingreso de Datos

alert("Hola Bienvenidx a Miskincareshop, presiona Aceptar para continuar comprando")

let compra = prompt(`Estos son los productos con Stock:
        1. Acido Ascorbico
        2. Acido Glicolico
        3. Polvo de Niacinamida
        4. Cafeina
       
         Ingresa el número de el o los Productos que Deseas Comprar`)

carritoCompras = compra.split(',').map(function (item) {
    return item.trim();
});

console.log(carritoCompras)

for (let i = 0; i < carritoCompras.length; i++) {
    switch (parseInt(carritoCompras[i])) {
        case 1:
            total += (productos[0].precio)
            break;
        case 2:
            total += (productos[1].precio)
            break;
        case 3:
            total += (productos[2].precio)
        case 4:
            total += (productos[3].precio)
            break;
    }
}
alert(`El total de tu compra es: ${total}`)
alert("Gracias por Comprar en MiSkincareShop")

totalCompra();


