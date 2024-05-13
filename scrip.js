
/*
const carrito=document.getElementById('carrito');
const elementos1 =document.getElementById('lista-1');
const lista= document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn=document.getElementById('vaciar-carrito');


cargarEventListener();

function cargarEventListener(){
    elementos1.addEventListener('click, comprarElemento');
    carrito.addEventListener('click, eliminarElemento')
    vaciarCarritoBtn.addEventListener('click, vaciarCarrito');

}

function comprarElemento(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento=e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento ={
        imagen:elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').txtContent,
        precio: elemento.querySelector('.precio').txtContent,
        id :elemento.querySelector('a').getAtribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elementos){
    const row =document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src = "${elementos.imagen}" width =100 />
    </td>
    <td>
        ${elementos.titulo}
    </td>

    <td>
        ${elementos.precio}
    </td>

    <td>
    <a herf="#" class="borrar" data-id="${elementos.id}> x <a/>
    </td>


    `;

    lista.appendChild(row);

}

function eliminarElemento(e){
    e.preventDefault();
    let elemento,
    elementoId;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento=e.target.parentElement.parentElement;
        elementoId=elemento.querySelector('a').getAtribute('data-id');
    }
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
        
    }
    return false;
}
*/
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListener();

function cargarEventListener() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').innerText,
        precio: elemento.querySelector('.precio').innerText,
        id: elemento.querySelector('a').getAttribute('data-id')
    };
    insertarCarrito(infoElemento);
}

function insertarCarrito(elementos) {
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>
        <img src="${elementos.imagen}" width="100" />
    </td>
    <td>
        ${elementos.titulo}
    </td>
    <td>
        ${elementos.precio}
    </td>
    <td>
        <a href="#" class="borrar" data-id="${elementos.id}">x</a>
    </td>
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
