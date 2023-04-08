

const menu = [
    {
        id: 1,
        titulo: "Sandwich",
        categoria: "Comida",
        precio: 3.99,
        img: "https://www.recetasderechupete.com/wp-content/uploads/2019/10/Sandwich-club-presentacion.jpg",
        desc: 'sandwich de queso'

    },
    {
        id: 2,
        titulo: "huevo",
        categoria: "Comida",
        precio: 3.9,
        img: "https://imag.bonviveur.com/huevos-rotos-con-jamon-o-huevos-estrellados.jpg",
        desc: `huevos estrellaods`

    },
    {
        id: 3,
        titulo: "Juego de Naranja",
        categoria: "Bebidas",
        precio: 20,
        img: "https://cdn.milenio.com/uploads/media/2021/08/08/razon-debes-beber-jugo-naranja.jpg",
        desc: `Juego de naraja natural servido en baso`

    },
    {
        id: 4,
        titulo: "Pastel de Chocolate",
        categoria: "Postres",
        precio: 20,
        img: "https://www.recetasderechupete.com/wp-content/uploads/2022/05/Best-chocolate-cake-1.jpg",
        desc: `Rebanada de pastel de chocolate muy deliciosa`

    },

];

const card = document.querySelector('.cards');
const btn = document.querySelector('.btn-menu');

window.addEventListener("DOMContentLoaded", mostrarTodoMenu);

btn.addEventListener('click', botonFiltrado);

// Filtra los productos en el DOM
function botonFiltrado(e) {
    if (e.target.innerHTML === 'Todo') {
        mostrarTodoMenu();
    };
    if (e.target.innerHTML === 'Comida') {
        filtroComida();
    };
    if (e.target.innerHTML === 'Bebibas') {
        filtroBebidas();
        console.log("le diste en bebidas")
    };
    if (e.target.innerHTML === 'Postres') {
        filtroPostres();
        console.log("le diste en Postres")
    };
}

// Muestra todo lo que hay en el menu cuando carga la pagina
function mostrarTodoMenu() {
    let displayMenu = menu.map(function (item) {
        return `<div class="card-menu">
        <img class="card-img-top" src="${item.img}">
        <div class="card-body">
            <h3>${item.titulo}</h3>
            <h5>$${item.precio}</h4>
            <p>${item.desc}</p>
        </div>
      </div>`;
    })
    displayMenu = displayMenu.join("");
    card.innerHTML = displayMenu;

}

// funciones que filtrar la comida por su categoria
function filtroComida() {
    const menuComida = menu.filter((comida) => {
        return comida.categoria === 'Comida'
    });
    agregarMenuHTML(menuComida);
};

function filtroBebidas() {
    // se comprueba si existe la categoria
    const menuBebidas = menu.filter((bebidas) => {
        return bebidas.categoria === 'Bebidas';
    });
    agregarMenuHTML(menuBebidas);
};

function filtroPostres() {
    // se comprueba si existe la categoria
    const menuPostres = menu.filter((postres) => {
        return postres.categoria === 'Postres';
    });
    agregarMenuHTML(menuPostres)

}

function agregarMenuHTML(categoria) {
    let menuFiltrado = categoria.map(function (item) {
        return `<div class="card-menu">
        <img class="card-img-top" src="${item.img}">
        <div class="card-body">
            <h3>${item.titulo}</h3>
            <h5>$${item.precio}</h5>
            <p>${item.desc}</p>
        </div>
      </div>`;
    })
    menuFiltrado = menuFiltrado.join("");
    console.log(categoria);
    card.innerHTML = menuFiltrado;


}









