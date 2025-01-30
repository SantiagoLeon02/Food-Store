let carrito = JSON.parse(localStorage.getItem("carrito"))||[];
const tablaCarrito = document.getElementById("tabla-carrito");

function mostrarCarrito(){
    tablaCarrito.innerHTML = "";
    carrito.forEach((producto, index)=> {
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${producto.nombre}</td>
        <td>$${producto.precioUnitari.toFixed(3)}</td>
        <td>${producto.cantidad}</td>
         <td>$${producto.total.toFixed(3)}</td>
        <td><button onclick="eliminarProducto(${index})">Eliminar</button></td>
        `;
        tablaCarrito.appendChild(fila);
    });
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}


function vaciarCarrito() {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}
  
  mostrarCarrito();