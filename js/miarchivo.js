//Array de el Carrito de Compras

let carrito = [];
const contenedorDeProductos= document.getElementById('container');

mostrandoProductos(productos);

function mostrandoProductos (array){

    for ( const productos of array) {
        let div = document.createElement('div');
        div.classList.add('row');
        div.innerHTML+= `<div class="producto col">
                                <img src=${productos.img} class="producto__img">
                                <h3 class="producto__titulo">${productos.nombre}</h3>
                                <span class="producto__precio">${productos.precio}</span>
                                <div>
                                    <input class="btn btn-primary" value="Comprar" type="button">
                                </div>  
                          </div>`
        contenedorDeProductos.appendChild(div)

    }
}





/*Guardar en el localStorage todos los productos
const guardar = (clave, valor) => { localStorage.setItem(clave, valor) };
guardar("lista", JSON.stringify(contenedorDeProductos));*/