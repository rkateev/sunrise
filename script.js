// Cart functionality
const cart = JSON.parse(localStorage.getItem("cart")) || []

// Update cart count on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()
  initializeMobileMenu()
  initializeMap()
  initializeAnimations()
})

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
      mobileMenuBtn.classList.toggle("active")
    })
  }
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
