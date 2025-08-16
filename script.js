// Cart functionality
const cart = JSON.parse(localStorage.getItem("cart")) || []

// Menu data and showCategory function
const menuData = {
  main: [
    {
      id: 1,
      name: "Стейк Рибай",
      description:
        "Сочный стейк из мраморной говядины, приготовленный на открытом огне до идеальной прожарки. Подается с авторским соусом и свежими травами.",
      price: 1200,
      image: "public/grilled-ribeye.png",
    },
    {
      id: 2,
      name: "Ребрышки барбекю",
      description:
        "Нежные свиные ребрышки, томленые в специальном маринаде и глазированные карамелизированным соусом барбекю. Подается с гарниром на выбор.",
      price: 950,
      image: "public/glazed-pork-ribs.png",
    },
  ],
  burgers: [
    {
      id: 3,
      name: 'Бургер "Sunrise"',
      description:
        "Фирменный бургер с сочной говяжьей котлетой, выдержанным сыром чеддер, свежими овощами и специальным соусом шеф-повара.",
      price: 850,
      image: "public/gourmet-burger.png",
    },
  ],
  salads: [
    {
      id: 4,
      name: "Салат с говядиной",
      description:
        "Изысканный салат с кусочками маринованной говядины, свежими листьями салата, помидорами черри, авокадо и заправкой на основе бальзамического уксуса.",
      price: 650,
      image: "public/placeholder.jpg",
    },
  ],
  desserts: [
    {
      id: 5,
      name: "Шоколадный десерт",
      description:
        "Изысканный шоколадный мусовый торт с нежными слоями глазури, украшенный золотым листом и свежими ягодами. Идеальное завершение трапезы.",
      price: 450,
      image: "public/placeholder.jpg",
    },
  ],
}

// Update cart count on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()
  initializeMobileMenu()
  initializeMap()
  initializeAnimations()

  // Load default category (main dishes) if on menu page
  if (document.getElementById("menuItems")) {
    showCategory("main")
  }
})

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")
  const mobileMenuClose = document.getElementById("mobileMenuClose")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
      mobileMenuBtn.classList.toggle("active")
    })
  }

  if (mobileMenuClose && mobileMenu) {
    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      if (mobileMenuBtn) mobileMenuBtn.classList.remove("active")
    })
  }

  // Close menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")
  mobileNavLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      if (mobileMenuBtn) mobileMenuBtn.classList.remove("active")
    })
  })
}

// Cart functions
function addToCart(id, name, price, image) {
  const existingItem = cart.find((item) => item.id === id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      id: id,
      name: name,
      price: price,
      image: image,
      quantity: 1,
    })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
  updateCartCount()
  showCartNotification(name)
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const cartCount = document.getElementById("cartCount")
  const mobileCartCount = document.getElementById("mobileCartCount")

  if (cartCount) cartCount.textContent = totalItems
  if (mobileCartCount) mobileCartCount.textContent = totalItems
}

function showCartNotification(itemName) {
  // Create notification element
  const notification = document.createElement("div")
  notification.className = "cart-notification"
  notification.innerHTML = `
        <div class="notification-content">
            <span>✓ ${itemName} добавлен в корзину</span>
        </div>
    `

  // Add styles
  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: var(--shadow-lg);
        z-index: 1001;
        animation: slideInRight 0.3s ease-out;
    `

  document.body.appendChild(notification)

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Initialize Yandex Map
function initializeMap() {
  const ymaps = window.ymaps // Declare the ymaps variable
  if (typeof ymaps !== "undefined") {
    ymaps.ready(() => {
      const map = new ymaps.Map("map", {
        center: [43.3169, 45.6986], // Грозный координаты
        zoom: 16,
        controls: ["zoomControl", "fullscreenControl"],
      })

      const placemark = new ymaps.Placemark(
        [43.3169, 45.6986],
        {
          balloonContent: "Ресторан Sunrise<br>пр. Кадырова 110",
        },
        {
          preset: "islands#redDotIcon",
        },
      )

      map.geoObjects.add(placemark)
    })
  }
}

// Initialize animations on scroll
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-fade-in-up")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".dish-card, .about-text, .contacts-info")
  animateElements.forEach((el) => observer.observe(el))
}

// Show category function
function showCategory(category, event = null) {
  const menuItems = document.getElementById("menuItems")
  const categoryBtns = document.querySelectorAll(".category-btn")

  // Update active button
  categoryBtns.forEach((btn) => btn.classList.remove("active"))
  if (event && event.target) {
    event.target.classList.add("active")
  } else {
    // Find the button for the default category
    const defaultBtn = document.querySelector(`[onclick*="'${category}'"]`)
    if (defaultBtn) {
      defaultBtn.classList.add("active")
    }
  }

  // Clear current items
  menuItems.innerHTML = ""

  // Add items for selected category
  menuData[category].forEach((item) => {
    const menuItem = document.createElement("div")
    menuItem.className = "dish-card"
    menuItem.innerHTML = `
      <div class="dish-image">
        <img src="${item.image}" alt="${item.name}" loading="lazy">
      </div>
      <div class="dish-content">
        <h3 class="dish-name">${item.name}</h3>
        <p class="dish-description">${item.description}</p>
        <div class="dish-footer">
          <span class="dish-price">${item.price} ₽</span>
          <button class="add-to-cart-btn" onclick="addToCart(${item.id}, '${item.name}', ${item.price}, '${item.image}')">
            В корзину
          </button>
        </div>
      </div>
    `
    menuItems.appendChild(menuItem)
  })
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add CSS animations for notifications
const style = document.createElement("style")
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`
document.head.appendChild(style)
