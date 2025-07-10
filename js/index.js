
let cartCount = 0;

// Inicializar animaciones al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    initializeAnimations();
    createParticles();
    initializeScrollAnimations();
    setupMouseFollower();
});

function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

function addToCart(product) {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;

    // Animación del carrito más elaborada
    const cart = document.querySelector('.cart');
    cart.classList.add('animate-bounce');
    cart.style.animation = 'shake 0.5s ease-in-out';

    // Crear efecto de partícula que vuela al carrito
    createCartParticle(event.target);

    setTimeout(() => {
        cart.style.animation = '';
        cart.classList.remove('animate-bounce');
    }, 500);

    // Mostrar mensaje con animación
    showNotification(`¡Producto agregado al carrito! Total: ${cartCount}`);
}

function toggleCart() {
    if (cartCount > 0) {
        showNotification(`Tienes ${cartCount} productos en tu carrito. ¡Gracias por tu compra!`, 'success');
    } else {
        showNotification('Tu carrito está vacío. ¡Explora nuestros productos!', 'info');
    }
}

// Crear partículas flotantes
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 5) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Crear efecto de partícula que vuela al carrito
function createCartParticle(button) {
    const particle = document.createElement('div');
    particle.innerHTML = '⭐';
    particle.style.position = 'fixed';
    particle.style.fontSize = '20px';
    particle.style.color = '#8B5CF6';
    particle.style.zIndex = '9999';
    particle.style.pointerEvents = 'none';

    const buttonRect = button.getBoundingClientRect();
    const cartRect = document.querySelector('.cart').getBoundingClientRect();

    particle.style.left = buttonRect.left + 'px';
    particle.style.top = buttonRect.top + 'px';

    document.body.appendChild(particle);

    // Animar hacia el carrito
    particle.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${cartRect.left - buttonRect.left}px, ${cartRect.top - buttonRect.top}px) scale(0.5)`, opacity: 0 }
    ], {
        duration: 800,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => {
        particle.remove();
    };
}

// Sistema de notificaciones
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background: ${type === 'success' ? '#10B981' : type === 'info' ? '#3B82F6' : '#EF4444'};
                color: white;
                padding: 1rem 2rem;
                border-radius: 10px;
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                font-weight: bold;
            `;

    document.body.appendChild(notification);

    // Animar entrada
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Animar salida
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Inicializar animaciones básicas
function initializeAnimations() {
    // Revelar texto del hero
    setTimeout(() => {
        document.querySelectorAll('.text-reveal').forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('show');
            }, index * 200);
        });
    }, 500);

    // Animar cards de productos con delay
    setTimeout(() => {
        document.querySelectorAll('.product-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('animate-fadeInUp');
            }, index * 200);
        });
    }, 1000);
}

// Animaciones al hacer scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('product-card')) {
                    entry.target.classList.add('animate-slideInLeft');
                } else if (entry.target.classList.contains('feature-card')) {
                    entry.target.classList.add('animate-slideInRight');
                }

                // Efecto de brillo
                entry.target.style.animation = 'glow 0.5s ease-out';
                setTimeout(() => {
                    entry.target.style.animation = '';
                }, 500);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.product-card, .feature-card').forEach(card => {
        observer.observe(card);
    });
}

// Seguidor del mouse
function setupMouseFollower() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
                position: fixed;
                width: 20px;
                height: 20px;
                background: rgba(139, 92, 246, 0.5);
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease;
                transform: translate(-50%, -50%);
            `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Efecto hover en botones
    document.querySelectorAll('button, .cta-button').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(2)';
            cursor.style.background = 'rgba(139, 92, 246, 0.8)';
        });

        btn.addEventListener('mouseleave', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.background = 'rgba(139, 92, 246, 0.5)';
        });
    });
}

// Efectos de hover mejorados para las cards
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px) scale(1.02)';
        this.style.boxShadow = '0 25px 50px rgba(139, 92, 246, 0.3)';

        // Animar el icono
        const icon = this.querySelector('.product-icon');
        icon.style.animation = 'bounce 0.6s ease-out';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(139, 92, 246, 0.1)';

        const icon = this.querySelector('.product-icon');
        icon.style.animation = '';
    });
});

// Smooth scrolling mejorado
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Crear efecto de onda
            createRippleEffect(e);

            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Crear efecto de onda al hacer clic
function createRippleEffect(e) {
    const ripple = document.createElement('div');
    ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.3);
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

    const rect = e.target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
    ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';

    e.target.style.position = 'relative';
    e.target.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

// Agregar CSS para el efecto ripple
const style = document.createElement('style');
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// Efecto de tipeo para el título
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Parallax effect para el hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');

    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Contador animado para el carrito
function animateCounter(element, start, end, duration = 1000) {
    const startTime = performance.now();

    function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const currentValue = Math.floor(start + (end - start) * progress);
        element.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}