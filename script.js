// Función para agregar productos al carrito
function agregarAlCarro(nombreProducto, precioProducto) {
    // Obtener la lista del carrito y el total
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');

    // Crear un nuevo elemento para el producto
    const item = document.createElement('li');
    item.textContent = `${nombreProducto} - $${precioProducto} CLP`;
    listaCarrito.appendChild(item);

    // Actualizar el total
    let totalActual = parseInt(totalElement.textContent.replace(/[^0-9]/g, ''));
    totalActual += precioProducto;
    totalElement.textContent = `Total: $${totalActual} CLP`;
}