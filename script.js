// 1. Animación para la imagen del plato
window.addEventListener('load', function() {
    // Esperar un poco antes de mostrar la imagen para efecto visual
    setTimeout(function() {
        document.body.classList.add('page-loaded');
    }, 500); // Reduje a 0.5 segundos (6 segundos era demasiado tiempo esperando)
});

// 2. Efecto del Menú al hacer Scroll (NUEVO)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    // Si bajamos más de 50 pixeles, agregamos la clase 'scrolled'
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        // Si estamos arriba, quitamos la clase para que sea transparente
        header.classList.remove('scrolled');
    }
});

// 3. Menú Hamburguesa para Móvil
function toggleMenu() {
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
}

// 4. Cerrar menú móvil al hacer click en un enlace
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        const nav = document.getElementById('nav-menu');
        // Solo remover si existe la clase (para evitar errores)
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});

// 5. Scroll suave al navegar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("activo");
}
