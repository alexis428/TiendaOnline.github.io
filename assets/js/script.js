'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // modal variables
    const modal = document.querySelector('[data-modal]');
    const modalCloseBtn = document.querySelectorAll('[data-modal-close]');
    const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

    // modal function
    const modalCloseFunc = function () { modal.classList.add('closed') }

    // modal eventListener
    modalCloseOverlay.addEventListener('click', modalCloseFunc);
    modalCloseBtn.forEach(btn => btn.addEventListener('click', modalCloseFunc));

    // notification toast variables
    const notificationToast = document.querySelector('[data-toast]');
    const toastCloseBtn = document.querySelector('[data-toast-close]');

    // notification toast eventListener
    toastCloseBtn.addEventListener('click', function () {
      notificationToast.classList.add('closed');
    });

    // mobile menu variables
    const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
    const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
    const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
    const overlay = document.querySelector('[data-overlay]');

    for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

      // mobile menu function
      const mobileMenuCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
      }

      mobileMenuOpenBtn[i].addEventListener('click', function () {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
      });

      mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
      overlay.addEventListener('click', mobileMenuCloseFunc);

    }

    // accordion variables
    const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
    const accordion = document.querySelectorAll('[data-accordion]');

    for (let i = 0; i < accordionBtn.length; i++) {

      accordionBtn[i].addEventListener('click', function () {

        const clickedBtn = this.nextElementSibling.classList.contains('active');

        for (let i = 0; i < accordion.length; i++) {

          if (clickedBtn) break;

          if (accordion[i].classList.contains('active')) {

            accordion[i].classList.remove('active');
            accordionBtn[i].classList.remove('active');

          }

        }

        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');

      });

    }

    // Carrito de compras
    const cart = [];
    const addToCartButtons = document.querySelectorAll('.add-cart-btn');
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const product = button.closest('.showcase');
        const productId = product.dataset.id;
        if (!cart.includes(productId)) {
          cart.push(productId);
          updateCartCount();
        }
      });
    });

    const updateCartCount = () => {
      const cartCount = document.querySelector('.header-user-actions .count');
      cartCount.textContent = cart.length;
    };

    // Autenticación de usuario
    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Lógica de autenticación
      });
    }

    const registerForm = document.querySelector('#register-form');
    if (registerForm) {
      registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Lógica de registro
      });
    }

    // Función para mostrar productos
    const showProducts = (category) => {
      const productContainer = document.querySelector('.product-grid');
      productContainer.innerHTML = ''; // Limpiar productos existentes

      // Datos de ejemplo de productos
      const products = {
        'Bidones de Agua': [
          { id: 1, name: 'Bidón de agua de 5 galones', price: '$10.00', description: 'Bidón de agua de alta calidad de 5 galones.', image: './assets/images/bidon.jpg' },
          { id: 2, name: 'Bidón de agua de 3 galones', price: '$8.00', description: 'Bidón de agua de alta calidad de 3 galones.', image: './assets/images/bidon.jpg' }
        ],
        'Jugos': [
          { id: 3, name: 'Jugo de Naranja', price: '$5.00', description: 'Jugo de naranja natural y fresco.', image: './assets/images/jugos.jpg' },
          { id: 4, name: 'Jugo de Manzana', price: '$4.00', description: 'Jugo de manzana natural y fresco.', image: './assets/images/jugos.jpg' }
        ],
        // Agregar más categorías y productos según sea necesario
      };

      // Mostrar productos de la categoría seleccionada
      products[category].forEach(product => {
        const productHTML = `
          <div class="showcase" data-id="${product.id}">
            <div class="showcase-banner">
              <img src="${product.image}" alt="${product.name}" class="product-img default">
            </div>
            <div class="showcase-content">
              <a href="#" class="showcase-category">${category}</a>
              <h3 class="showcase-title">${product.name}</h3>
              <p class="showcase-description">${product.description}</p>
              <div class="price-box">
                <p class="price">${product.price}</p>
              </div>
            </div>
          </div>
        `;
        productContainer.innerHTML += productHTML;
      });
    };

    // Agregar evento de clic a los elementos de la categoría
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
      item.addEventListener('click', () => {
        const category = item.querySelector('.category-item-title').textContent;
        showProducts(category);
      });
    });
});