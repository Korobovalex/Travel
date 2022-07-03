function toggleNav() {
    const navToggle = document.querySelector('.toggle'),
          navigation = document.querySelector('nav');

    navToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

function toggleVideo() {
    const trailer = document.querySelector('.trailer'),
          video = document.querySelector('video');

    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
}