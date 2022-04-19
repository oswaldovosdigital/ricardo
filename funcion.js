const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const video = document.getElementById('video');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
    video.src = "./video/ejemplo.mp4" ;
    
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
    video.src = "";

});


const abrir = document.getElementById('open_1');
const modal_contenedor = document.getElementById('modal_container_1');
const cerrar = document.getElementById('close_1');
const videos = document.getElementById('video_1');

abrir.addEventListener('click', () => {
    modal_contenedor.classList.add('show_1');
    videos.src = "./video/ejemplo_2.mp4";
    
});

cerrar.addEventListener('click', () => {
    modal_contenedor.classList.remove('show_1');
    videos.src = "";

});

