
const productos = document.querySelectorAll(".card");



productos.forEach((producto) => {
  const precioUnitario = producto.querySelector("#precioUnitario");
  const cantidadDeElemento = producto.querySelector("#cantidad");
  const precioTotal = producto.querySelector("#precioTotal");
  const botonIncremento = producto.querySelector("#incrementar");
  const botonDecremento = producto.querySelector("#decrementar");

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

  botonIncremento.addEventListener("click",incrementar);
  botonDecremento.addEventListener("click",decrementar);

  if(cantidad === 1 ){
    botonDecremento.disabled = true;
  }

});
