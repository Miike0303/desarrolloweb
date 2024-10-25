// Simulación de carrito (puedes usar localStorage para un carrito persistente)
let cart = [
    { name: 'Silla Nórdica', price: 50, quantity: 1 },
    { name: 'Silla Ergonomiica', price: 120, quantity: 2 }
  ];
  
  // Función para renderizar el carrito
  function renderCart() {
    const cartTableBody = document.querySelector('#cart-table tbody');
    const cartTotalElement = document.getElementById('cart-total');
    cartTableBody.innerHTML = ''; // Limpiar la tabla antes de renderizar
    let total = 0;
  
    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
  
      const cartRow = `
        <tr>
          <td>${item.name}</td>
          <td>$${item.price}</td>
          <td>
            <input type="number" value="${item.quantity}" min="1" class="form-control text-center" onchange="updateQuantity(${index}, this.value)">
          </td>
          <td>$${itemTotal.toFixed(2)}</td>
          <td>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Eliminar</button>
          </td>
        </tr>
      `;
      cartTableBody.innerHTML += cartRow;
    });
  
    cartTotalElement.textContent = total.toFixed(2);
  }
  
  // Función para actualizar la cantidad de un producto
  function updateQuantity(index, quantity) {
    cart[index].quantity = parseInt(quantity);
    renderCart();
  }
  
  // Función para eliminar un producto del carrito
  function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
  }
  
  // Función para simular el proceso de pago
  function checkout() {
    alert('Gracias por tu compra!');
    cart = []; // Limpiar el carrito después de la compra
    renderCart();
  }
  
  // Inicializar la vista del carrito
  document.addEventListener('DOMContentLoaded', renderCart);
  