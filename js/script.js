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

window.addEventListener("DOMContentLoaded", filtroTodo);

btn.addEventListener('click', botonFiltrado);

// Filtra los productos en el DOM
function botonFiltrado(e) {
    if (e.target.innerHTML === 'Comida') {
        filtroComida();
    }
    if (e.target.innerHTML === 'Bebidas') {
        filtroBebidas();
    }
    console.log(e.target.innerHTML);
}


// funciones que filtrar la comida por su categoria
function filtroTodo() {
    let displayMenu = menu.map(function (item) {
        return `<div class="card-menu" style="width: 18rem;">
        <img class="card-img-top" src="${item.img}" alt="Card image cap">
        <div class="card-body">
            <h3>${item.titulo}</h2>
            <h5>$${item.precio}</h4>
            <p>${item.desc}</p>
        </div>
      </div>`;
    })
    displayMenu = displayMenu.join("");
    console.log(displayMenu);

    card.innerHTML = displayMenu;

}

function filtroComida() {
    const menuComida = menu.filter((comida) => {
        return comida.categoria === 'Comida'
    });
    console.log(menuComida)
    let filtradoComida = menuComida.map(function (filtro) {
        return `<div class="card-menu" style="width: 18rem;">
        <img class="card-img-top" src="${filtro.img}" alt="Card image cap">
        <div class="card-body">
            <h3>${filtro.titulo}</h2>
            <h5>$${filtro.precio}</h4>
            <p>${filtro.desc}</p>
        </div>
      </div>`;
    })
    limpiarHTML();
    card.innerHTML = filtradoComida;
};

function filtroBebidas() {
    const menuBebidas = menu.filter((bebidas) => {
        return bebidas.categoria === 'Bebidas';
    });
    console.log(menuBebidas)
    let filtradoBebidas = menuBebidas.map(function (filtro) {
        return `<div class="card-menu" style="width: 18rem;">
        <img class="card-img-top" src="${filtro.img}" alt="Card image cap">
        <div class="card-body">
            <h3>${filtro.titulo}</h2>
            <h5>$${filtro.precio}</h4>
            <p>${filtro.desc}</p>
        </div>
      </div>`;
    })
    limpiarHTML();
    card.innerHTML = filtradoBebidas;
};


// Limpiador de HTML
function limpiarHTML() {
    card.innerHTML = "";
}



