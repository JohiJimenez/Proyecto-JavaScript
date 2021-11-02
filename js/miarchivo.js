//Constantes y Variables a usar
let carrito = [];
let stockProductos = [];
precioTotal = 0;


// Recuperando el Stock y Llamada a un JSON que cree con mis Productos

function recuperarProductos() {
    let stock = JSON.parse(localStorage.getItem('stock'))
    if (stock) {
        stock.forEach(element => stockProductos.push(element))
    }
}

$.getJSON('stock.json', function (dato) {
    localStorage.setItem('stock', JSON.stringify(dato))
    recuperarProductos()
    mostrandoProductos(stockProductos)
})



// Creando un constructor
class Productos{
    constructor(id,title,price,thumbnail, cantidad){
        this.id= id;
        this.nombre= title;
        this.precio= price;
        this.img= thumbnail;
        this.cantidad = cantidad
    }
}


async function setData() {
    const result = await fetch('stock.json')
    const data = await result.json()
  }

setData();


// Obtener el Contenedor del Dom 
const footer = document.getElementById('footer');
const templateFooter = document.getElementById('template-footer');


//Funcion que permite Mostrar en el HTML los Productos


function mostrandoProductos(array) {
    container.innerHTML ='';
    for (const producto of array) {
        $("#container").append(`<div class="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                            <div class="producto col">
                                <img src=${producto.img} class="producto__img">
                                <h3 class="producto__titulo">${producto.nombre}</h3>
                                <span class="producto__precio">${producto.precio}</span>
                                <div>
                                    <input id="comprar${producto.id}" class="btn btn-primary" value="Comprar" type="button">
                                </div>  
                          </div>
                        </div>`);
        $(`#comprar${producto.id}`).click(() => {

            let repetido = carrito.find(element => element.id === producto.id);
            if (repetido) {
                const index = carrito.findIndex(element => element.id === producto.id)
                carrito[index].cantidad = (carrito[index].cantidad + 1);
                carrito[index] = repetido
                pintarCarrito()

            } else {
                id = producto.id;
                let agregar = stockProductos.find(element => element.id == id);
                carrito.push(agregar);
                pintarCarrito()
            }
            Toastify({
                text: "Producto Agregado",
                backgroundColor: "#CE97B0",
                className: "info",
              }).showToast();

        })

    }
}


//Funcion Pintar el Carrito en el Template

const pintarCarrito = () => {
    carritoBody.innerHTML = '';

    carrito.forEach(item => {
        $("#carritoBody").append(`<tr>
        <th>${item.nombre}</th>
        <th>${item.cantidad}</th>
        <th> 
            <button id="mas" class="btn btn-warning btn-mas btn-sm ml-5" data-id=${item.id}>
            +
            </button>
            <button class="btn btn-warning btn-menos btn-sm ml-1" data-id=${item.id}>
            -
            </button>
        </th>
        <th>${item.precio * item.cantidad}</th>
        </tr>`);
        footerCarrito();
    });

}


/* funcion si el carrito esta vacio, si tengo productos hacer los calculos del Total 
a pagar y si quiero vaciar el Carrito*/

const footerCarrito = () => {
    footer.innerHTML = '';
    if (carrito.length == 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
    `
    } else {
        const precioTotal = carrito.reduce((acc, elemento) => acc + (elemento.precio * elemento.cantidad), 0);
        footer.innerHTML = `
         <th class="border-top-right"> Precio Total: ${precioTotal}</th> 
         <th>
         <th>
            <button id="vaciar-carrito" class="btn btn-danger btn-sm" >
                Vaciar Carrito
            </button>
        </th>
        </th>`
    }
    const btnVaciar = document.getElementById('vaciar-carrito')
    btnVaciar.addEventListener('click', () => {
        carrito = [];
        carritoBody.innerHTML = '';
        footer.innerHTML = `
            <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th> `
    })


}


//Evento botones aumentar/disminuir 

carritoBody.addEventListener('click', e => {

    if (e.target.classList.contains('btn-mas')) {
        id = (e.target.dataset.id)
        let aumentar = carrito.find(producto => producto.id == id)
        aumentar.cantidad = aumentar.cantidad + 1
        pintarCarrito()

    } else if (e.target.classList.contains('btn-menos')) {
        id = (e.target.dataset.id)
        let disminuir = carrito.find(producto => producto.id == id)
        disminuir.cantidad = disminuir.cantidad - 1
        Toastify({
            text: "Producto Eliminado",
            backgroundColor: "red",
            className: "info",
          }).showToast();
        if (disminuir.cantidad === 0) {
            const index = carrito.findIndex(element => element.id === disminuir.id)
            carrito.splice(index, 1)
        }
        pintarCarrito()
    }
})


