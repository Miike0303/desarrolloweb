// Lista de productos (se puede obtener de una API o base de datos)
const products = [
    { name: 'Silla Nórdica', price: 50, image: 'images/product-1.png' },
    { name: 'Silla Ergonomica', price: 80, image: 'images/product-2.png' },
    { name: 'Mesa de Centro', price: 120, image: 'images/product-3.png' }
  ];
  
  // Función para renderizar productos
  function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar lista antes de renderizar
  
    products.forEach((product) => {
      const productHTML = `
        <div class="col-md-4">
          <div class="product-item">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="product-price">$${product.price}</p>
            <button class="btn btn-primary" onclick="addToCart('${product.name}')">Añadir al carrito</button>
          </div>
        </div>
      `;
      productList.innerHTML += productHTML;
    });
  }
  
  // Función para añadir un producto al carrito (simulado)
  function addToCart(productName) {
    alert(`${productName} ha sido añadido al carrito.`);
  }
  
  // Inicializar la lista de productos
  document.addEventListener('DOMContentLoaded', renderProducts);
  