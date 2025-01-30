
const productos = document.querySelectorAll(".card");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productos.forEach((producto) => {
  const nombre = document.querySelector(".card-title").textContent;
  const precioUnitario = producto.querySelector("#precioUnitario");
  const cantidadDeElemento = producto.querySelector("#cantidad");
  const precioTotal = producto.querySelector("#precioTotal");
  const botonIncremento = producto.querySelector("#incrementar");
  const botonDecremento = producto.querySelector("#decrementar");
  const botonAgrega = producto.querySelector("#agregar");

  let precioUnitari = parseFloat(precioUnitario.textContent);
  let cantidad = parseInt(cantidadDeElemento.textContent);

  function actualizarPrecioTotal(){
    const total = cantidad * precioUnitari;
    precioTotal.textContent = total.toFixed(3);
  }
  
  function incrementar(){
    cantidad++;
    cantidadDeElemento.textContent = cantidad;
    actualizarPrecioTotal()
    botonDecremento.disabled = false;
  }

  function decrementar(){
    if(cantidad > 1){
      cantidad--;
      cantidadDeElemento.textContent = cantidad;
      actualizarPrecioTotal()
    } 

    if(cantidad === 1){
      botonDecremento.disabled = true;
    }
  }

  function agregarCarrito(){
    const productoCarrito = {
      nombre,
      precioUnitari,
      cantidad,
      total: cantidad * precioUnitari
    };

    const index = carrito.findIndex((item) => item.nombre === nombre);

    if(index !== -1){
      carrito[index].cantidad += cantidad;
      carrito[index].total = carrito[index].cantidad* carrito[index].precioUnitari;
    }else{
      carrito.push(productoCarrito);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`${nombre} agregado al carrito`)

  }

  botonIncremento.addEventListener("click",incrementar);
  botonDecremento.addEventListener("click",decrementar);
  botonAgrega.addEventListener("click", agregarCarrito)

  if(cantidad === 1 ){
    botonDecremento.disabled = true;
  }

});
