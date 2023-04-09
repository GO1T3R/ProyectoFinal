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
        titulo: "Huevo",
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
        titulo: "Juego Verde",
        categoria: "Bebidas",
        precio: 20,
        img: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/02/receta-jugo-verde-rapido.jpg",
        desc: `Requisimo juego verde, ideal para desintoxicar el cuerpo`

    },
    {
        id: 5,
        titulo: "Juego de Zanahoria",
        categoria: "Bebidas",
        precio: 20,
        img: "https://cdn2.cocinadelirante.com/sites/default/files/images/2020/10/beneficios-y-propiedades-del-jugo-de-zanahoria.jpg",
        desc: `Juego de zanahoria con naranja servido en un vaso`

    },
    {
        id: 6,
        titulo: "Agua de Limon",
        categoria: "Bebidas",
        precio: 20,
        img: "https://citrojugo.com.mx/wp-content/uploads/2020/08/jugonfcbig.jpg",
        desc: `vaso de con agua de limon`

    },
    {
        id: 7,
        titulo: "Agua de Sandia",
        categoria: "Bebidas",
        precio: 20,
        img: "https://www.cardamomo.news/__export/1652031161004/sites/debate/img/2022/05/08/agua-de-sandia.jpeg_1902800913.jpeg",
        desc: `Agua de sandia, lo puede acompañar con chile`

    },
    {
        id: 8,
        titulo: "Refrescos",
        categoria: "Bebidas",
        precio: 20,
        img: "https://happysumo.com.mx/wp-content/uploads/2018/01/refrescos.png",
        desc: `Refrescos Coca-Cola, Fanta, Sprite, Naranjada, Munde, Fresca y Limonada`

    },

    {
        id: 9,
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
    efectoCarga();
    
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