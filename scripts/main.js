// ================================
// MAIN JAVASCRIPT FILE
// ================================

/**
 * Portfolio Website JavaScript
 * Author: David López
 * Features: Theme switching, smooth navigation, animations, form handling, etc.
 */

// ================================
// GLOBAL VARIABLES & CONSTANTS
// ================================
const ANIMATION_DURATION = 300;
const SCROLL_THRESHOLD = 100;
const TYPEWRITER_SPEED = 100;
const TYPEWRITER_DELAY = 2000;

// DOM Elements
let navbar, navLinks, mobileMenuToggle, navMenu, themeToggle, backToTop;
let sections, heroSection, contactForm, projectsGrid, filterButtons;

// State
let isMenuOpen = false;
let currentTheme = 'dark';
let isScrolled = false;
let animationObserver;
let typewriterTimeout;

// ================================
// INITIALIZATION
// ================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio loaded successfully!');
    
    // Initialize all components
    initializeElements();
    initializeTheme();
    initializeNavigation();
    initializeAnimations();
    initializeTypewriter();
    initializeScrollEffects();
    initializeProjects();
    initializeContactForm();
    // Defer non-critical visual enhancements
    lazyLoadEnhancements();
});

// ================================
// ELEMENT INITIALIZATION
// ================================
function initializeElements() {
    // Navigation elements
    navbar = document.getElementById('navbar');
    navLinks = document.querySelectorAll('.nav-link');
    mobileMenuToggle = document.getElementById('mobileMenuToggle');
    navMenu = document.getElementById('navMenu');
    
    // Theme and UI elements
    themeToggle = document.getElementById('themeToggle');
    backToTop = document.getElementById('backToTop');
    
    // Content sections
    sections = document.querySelectorAll('.section');
    heroSection = document.getElementById('inicio');
    contactForm = document.getElementById('contactForm');
    projectsGrid = document.getElementById('projectsGrid');
    filterButtons = document.querySelectorAll('.filter-btn');
    
    console.log('✅ Elements initialized');
}

// ================================
// THEME MANAGEMENT
// ================================
function initializeTheme() {
    // Check for saved theme or default to dark
    const savedTheme = localStorage.getItem('portfolio-theme') || 'dark';
    setTheme(savedTheme);
    
    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    console.log('✅ Theme system initialized');
}

function setTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
    
    // Update theme toggle button state
    if (themeToggle) {
        themeToggle.setAttribute('aria-label', 
            theme === 'dark' ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'
        );
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Add a subtle animation effect
    document.body.style.transition = 'all 0.3s ease';
    setTimeout(() => {
        document.body.style.transition = '';
    }, 300);
}

// ================================
// NAVIGATION SYSTEM
// ================================
function initializeNavigation() {
    // Mobile menu toggle
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', handleNavClick);
    });
    
    // Back to top button
    if (backToTop) {
        backToTop.addEventListener('click', scrollToTop);
    }
    
    // Window scroll event
    window.addEventListener('scroll', handleScroll);
    
    // Update active nav link on scroll
    window.addEventListener('scroll', updateActiveNavLink);
    
    console.log('✅ Navigation initialized');
}

function toggleMobileMenu() {
    isMenuOpen = !isMenuOpen;
    
    if (navMenu && mobileMenuToggle) {
        navMenu.classList.toggle('active', isMenuOpen);
        mobileMenuToggle.classList.toggle('active', isMenuOpen);
        
        // Update aria attributes
        mobileMenuToggle.setAttribute('aria-expanded', isMenuOpen);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }
}

function handleNavClick(e) {
    e.preventDefault();
    
    const targetId = e.target.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
        // Close mobile menu if open
        if (isMenuOpen) {
            toggleMobileMenu();
        }
        
        // Smooth scroll to section
        smoothScrollTo(targetSection);
        
        // Update active state
        updateNavActiveState(e.target);
    }
}

function smoothScrollTo(element) {
    const offsetTop = element.offsetTop - (navbar ? navbar.offsetHeight : 0);
    
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

function updateNavActiveState(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

function updateActiveNavLink() {
    const scrollPosition = window.pageYOffset + window.innerHeight / 3;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const correspondingNavLink = document.querySelector(`[href="#${sectionId}"]`);
            if (correspondingNavLink && !correspondingNavLink.classList.contains('active')) {
                updateNavActiveState(correspondingNavLink);
            }
        }
    });
}

function handleScroll() {
    const scrollY = window.pageYOffset;
    
    // Update navbar background
    if (navbar) {
        if (scrollY > SCROLL_THRESHOLD && !isScrolled) {
            navbar.classList.add('scrolled');
            isScrolled = true;
        } else if (scrollY <= SCROLL_THRESHOLD && isScrolled) {
            navbar.classList.remove('scrolled');
            isScrolled = false;
        }
    }
    
    // Show/hide back to top button
    if (backToTop) {
        if (scrollY > window.innerHeight / 2) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ================================
// ANIMATION SYSTEM
// ================================
function initializeAnimations() {
    // Initialize Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    animationObserver = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all elements that should animate on scroll
    const animatedElements = document.querySelectorAll('.about-card, .skill-group, .soft-skill-card, .stat-card, .project-card, .contact-card');
    
    animatedElements.forEach(el => {
        el.classList.add('scroll-reveal');
        animationObserver.observe(el);
    });
    
    // Initialize progress bars animation
    initializeProgressBars();
    
    // Initialize counter animations
    initializeCounters();
    
    console.log('✅ Animations initialized');
}

function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            
            // Animate progress bars when skills section is visible
            if (entry.target.closest('#habilidades')) {
                animateProgressBars();
            }
            
            // Animate counters when about section is visible
            if (entry.target.closest('#sobre-mi')) {
                animateCounters();
            }
        }
    });
}

function initializeProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress') || 0;
        bar.style.width = '0%';
        bar.setAttribute('data-target', progress);
    });
}

function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach((bar, index) => {
        const targetWidth = bar.getAttribute('data-target') + '%';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, index * 100);
    });
}

function initializeCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        counter.innerText = '0';
    });
}

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-count'));
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            counter.innerText = Math.ceil(current);
            
            if (current >= target) {
                counter.innerText = target;
                clearInterval(timer);
            }
        }, 20);
    });
}

// ================================
// TYPEWRITER EFFECT
// ================================
function initializeTypewriter() {
    const typewriterElement = document.querySelector('.typewriter');
    
    if (typewriterElement) {
        const words = typewriterElement.getAttribute('data-words').split(',');
        let currentWordIndex = 0;
        let currentText = '';
        let isDeleting = false;
        
        function typeWriter() {
            const currentWord = words[currentWordIndex];
            
            if (isDeleting) {
                currentText = currentWord.substring(0, currentText.length - 1);
            } else {
                currentText = currentWord.substring(0, currentText.length + 1);
            }
            
            typewriterElement.innerHTML = currentText;
            
            let typeSpeed = isDeleting ? 50 : TYPEWRITER_SPEED;
            
            if (!isDeleting && currentText === currentWord) {
                typeSpeed = TYPEWRITER_DELAY;
                isDeleting = true;
            } else if (isDeleting && currentText === '') {
                isDeleting = false;
                currentWordIndex = (currentWordIndex + 1) % words.length;
                typeSpeed = 500;
            }
            
            typewriterTimeout = setTimeout(typeWriter, typeSpeed);
        }
        
        // Start typewriter effect
        setTimeout(typeWriter, 1000);
    }
    
    console.log('✅ Typewriter effect initialized');
}

// ================================
// SCROLL EFFECTS
// ================================
function initializeScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', handleParallax);
    
    console.log('✅ Scroll effects initialized');
}

function handleParallax() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}

// ================================
// LAZY LOAD HEAVY ENHANCEMENTS
// ================================
function lazyLoadEnhancements() {
    // Use requestIdleCallback when available to avoid blocking first render
    const loader = () => {
        // Lazy-load particles.js only if the container exists
        const container = document.getElementById('particles-js');
        if (container && !window.particlesJS) {
            loadScript('https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js')
                .then(() => {
                    if (window.particlesJS) {
                        window.particlesJS('particles-js', {
                            particles: {
                                number: { value: 40, density: { enable: true, value_area: 800 } },
                                color: { value: ['#00d4ff', '#ff6b6b', '#ffd700'] },
                                shape: { type: 'circle' },
                                opacity: { value: 0.25 },
                                size: { value: 3, random: true },
                                line_linked: { enable: true, distance: 150, color: '#00d4ff', opacity: 0.2, width: 1 },
                                move: { enable: true, speed: 1.2 }
                            },
                            interactivity: {
                                detect_on: 'canvas',
                                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: false }, resize: true },
                                modes: { repulse: { distance: 100, duration: 0.4 } }
                            },
                            retina_detect: true
                        });
                    }
                })
                .catch(() => {/* ignore */});
        }
    };
    if ('requestIdleCallback' in window) {
        window.requestIdleCallback(loader, { timeout: 1500 });
    } else {
        // Fallback: delay after first load to not affect TTI
        window.addEventListener('load', () => setTimeout(loader, 1200));
    }
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = resolve;
        s.onerror = reject;
        document.head.appendChild(s);
    });
}

// ================================
// PROJECTS SYSTEM
// ================================
function initializeProjects() {
    // Sample projects data (you can replace this with real data)
    const projects = [
        {
            title: "E-Commerce Moderno",
            description: "Plataforma de comercio electrónico con carrito de compras, sistema de pagos y panel de administración.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "🛍️",
            category: "web",
            demoLink: "#",
            codeLink: "#"
        },
        {
            title: "App Móvil de Fitness",
            description: "Aplicación móvil para seguimiento de ejercicios y planes nutricionales personalizados.",
            tech: ["React Native", "Firebase", "Redux"],
            image: "💪",
            category: "mobile",
            demoLink: "#",
            codeLink: "#"
        },
        {
            title: "Dashboard Analytics",
            description: "Panel de control interactivo con gráficos en tiempo real y análisis de datos avanzado.",
            tech: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
            image: "📊",
            category: "web",
            demoLink: "#",
            codeLink: "#"
        },
        {
            title: "API REST Robusta",
            description: "API escalable con autenticación JWT, documentación automática y pruebas unitarias.",
            tech: ["Express.js", "PostgreSQL", "JWT", "Swagger"],
            image: "🔧",
            category: "backend",
            demoLink: "#",
            codeLink: "#"
        },
        {
            title: "Sistema de Gestión",
            description: "Sistema completo de gestión empresarial con módulos de inventario, ventas y reportes.",
            tech: ["Laravel", "MySQL", "Bootstrap", "Chart.js"],
            image: "📈",
            category: "web",
            demoLink: "#",
            codeLink: "#"
        },
        {
            title: "App de Mensajería",
            description: "Aplicación de chat en tiempo real con salas privadas, compartir archivos y videollamadas.",
            tech: ["Socket.io", "React", "WebRTC", "Redis"],
            image: "💬",
            category: "web",
            demoLink: "#",
            codeLink: "#"
        }
    ];
    
    // Render projects
    renderProjects(projects);
    
    // Initialize project filters
    initializeProjectFilters(projects);
    
    console.log('✅ Projects initialized');
}

function renderProjects(projects) {
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = projects.map(project => `
        <div class="project-card" data-category="${project.category}">
            <div class="project-image">
                ${project.image}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoLink}" class="project-link primary" target="_blank" rel="noopener noreferrer">Ver Demo</a>
                    <a href="${project.codeLink}" class="project-link secondary" target="_blank" rel="noopener noreferrer">Código</a>
                </div>
            </div>
        </div>
    `).join('');
}

function initializeProjectFilters(projects) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active filter button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            filterProjects(filter, projects);
        });
    });
}

function filterProjects(filter, projects) {
    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);
    
    // Add fade out animation
    projectsGrid.style.opacity = '0';
    projectsGrid.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        renderProjects(filteredProjects);
        
        // Add fade in animation
        projectsGrid.style.opacity = '1';
        projectsGrid.style.transform = 'translateY(0)';
    }, 200);
}

// ================================
// CONTACT FORM
// ================================
function initializeContactForm() {
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    console.log('✅ Contact form initialized');
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<span>Enviando...</span>';
    submitButton.disabled = true;
    
    try {
        // Simulate form submission (replace with real implementation)
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Success message
        showNotification('¡Mensaje enviado con éxito! Te contactaré pronto.', 'success');
        contactForm.reset();
        
    } catch (error) {
        // Error message
        showNotification('Error al enviar el mensaje. Por favor, inténtalo de nuevo.', 'error');
        console.error('Form submission error:', error);
        
    } finally {
        // Reset button
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }
}

// ================================
// NOTIFICATIONS SYSTEM
// ================================
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span class="notification-message">${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">✕</button>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#00d4ff' : '#ff6b6b'};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 300px;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// ================================
// UTILITY FUNCTIONS
// ================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ================================
// PERFORMANCE OPTIMIZATIONS
// ================================

// Optimize scroll handlers with throttling
window.addEventListener('scroll', throttle(handleScroll, 16));
window.addEventListener('scroll', throttle(updateActiveNavLink, 100));
window.addEventListener('scroll', throttle(handleParallax, 16));

// ================================
// ERROR HANDLING
// ================================
window.addEventListener('error', function(e) {
    console.error('Portfolio Error:', e.error);
    // You could send this to an error reporting service
});

// ================================
// KEYBOARD NAVIGATION
// ================================
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && isMenuOpen) {
        toggleMobileMenu();
    }
    
    // Tab navigation improvements
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

// ================================
// ACCESSIBILITY IMPROVEMENTS
// ================================
function announceToScreenReader(message) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = message;
    
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// ================================
// EXPORT FOR TESTING (if needed)
// ================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setTheme,
        toggleTheme,
        smoothScrollTo,
        showNotification,
        debounce,
        throttle
    };
}

// ================================
// CONSOLE ART (Optional fun touch)
// ================================
console.log(`
    ____             _     _   _      __                 
   |  _ \\  __ ___   _(_) __| | | |    /_/_ _ __   ___ ____
   | | | |/ _\` \\ \\ / / |/ _\` | | |   / _ \\ '_ \\ / _ \\_  /
   | |_| | (_| |\\ V /| | (_| | | |__| (_) | |_) |  __// / 
   |____/ \\__,_| \\_/ |_|\\__,_| |_____\\___/| .__/ \\___/___|
                                         |_|              
   
   🚀 Portfolio cargado exitosamente!
   📧 Contacto: davidlopezf03@gmail.com
   💻 Desarrollado con ❤️ y mucho ☕
`);

console.log('👨‍💻 ¡Hola! Si estás viendo esto, probablemente eres desarrollador también. ¡Conectemos!');