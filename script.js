const carrito = [];

function agregarAlCarro(nombre, precio) {
    
    const productoExistente = carrito.find(item => item.nombre === nombre);
    if (productoExistente) {
        
        productoExistente.cantidad++;
        productoExistente.precioTotal += precio;
    } else {
        
        carrito.push({ nombre, precioUnitario: precio, cantidad: 1, precioTotal: precio });
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const total = document.getElementById("total");
    lista.innerHTML = ""; 
    let suma = 0;

    carrito.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - ${item.cantidad} unidad(es) - $${item.precioTotal.toLocaleString()} CLP`;
        lista.appendChild(li);
        suma += item.precioTotal;
    });

    total.textContent = `Total: $${suma.toLocaleString()} CLP`;
}