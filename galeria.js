// Modal para videos
let currentVideoSrc = '';

function openVideoModal(element) {
    const video = element.querySelector('video source');
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    if (video) {
        currentVideoSrc = video.src;
        modalVideo.querySelector('source').src = currentVideoSrc;
        modalVideo.load();
        
        // Detectar si es video vertical (9:16)
        const videoContainer = element.querySelector('.video-container-vertical');
        if (videoContainer) {
            modal.classList.add('vertical-video');
        } else {
            modal.classList.remove('vertical-video');
        }
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Evita scroll
    }
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    
    modal.style.display = 'none';
    modalVideo.pause();
    modalVideo.currentTime = 0;
    document.body.style.overflow = 'auto'; // Restaura scroll
}

// Cerrar modal al hacer clic fuera
document.getElementById('videoModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeVideoModal();
    }
});

// Cerrar con tecla ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
});
// Al final de tu script.js o galeria.js
document.addEventListener('DOMContentLoaded', function() {
    // Silenciar TODOS los videos automáticamente
    const allVideos = document.querySelectorAll('video');
    allVideos.forEach(video => {
        video.muted = true;
        video.setAttribute('muted', ''); // Agregar atributo HTML también
    });
});