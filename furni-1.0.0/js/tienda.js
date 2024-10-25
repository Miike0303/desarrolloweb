// Lista de productos (se puede obtener de una API o base de datos)
const products = [
  {
      name: 'Silla Nórdica',
      price: 50,
      images: ['images/product-1.png', 'images/product-2.png', 'images/product-3.png']
  },
  {
      name: 'Silla Ergonomica',
      price: 80,
      images: ['images/product-2.png', 'images/product-3.png']
  },
  {
      name: 'Mesa de Centro',
      price: 120,
      images: ['images/product-3.png', 'images/product-2.png', 'images/product-1.png']
  }
];

// Función para renderizar productos
function renderProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Limpiar lista antes de renderizar

  products.forEach((product, index) => {
      const productHTML = `
        <div class="col-md-4">
          <div class="product-item text-center">
            <div class="product-image position-relative">
              <img src="${product.images[0]}" alt="${product.name}" class="img-fluid" id="image-${index}">
              <button class="btn btn-secondary position-absolute top-50 start-0 translate-middle-y" onclick="changeImage(${index}, -1)">&#8592;</button>
              <button class="btn btn-secondary position-absolute top-50 end-0 translate-middle-y" onclick="changeImage(${index}, 1)">&#8594;</button>
            </div>
            <h3>${product.name}</h3>
            <p class="product-price">$${product.price}</p>
            <button class="btn btn-primary" onclick="addToCart('${product.name}')">Añadir al carrito</button>
          </div>
        </div>
      `;
      productList.innerHTML += productHTML;
  });
}

// Función para cambiar la imagen en la galería de un producto
function changeImage(productIndex, direction) {
  const product = products[productIndex];
  const imageElement = document.getElementById(`image-${productIndex}`);

  // Obtener el índice actual de la imagen
  let currentImageIndex = parseInt(imageElement.dataset.index) || 0;
  
  // Cambiar el índice basado en la dirección
  currentImageIndex = (currentImageIndex + direction + product.images.length) % product.images.length;

  // Actualizar el src de la imagen y el índice en el dataset
  imageElement.src = product.images[currentImageIndex];
  imageElement.dataset.index = currentImageIndex;
}

// Función para añadir un producto al carrito (simulado)
function addToCart(productName) {
  alert(`${productName} ha sido añadido al carrito.`);
}

// Inicializar la lista de productos
document.addEventListener('DOMContentLoaded', renderProducts);
