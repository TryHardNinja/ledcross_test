function headerOverlayVideo() {
    'use strict';
    var overlay = document.querySelector('.header__overlay-video');
    var watch = document.querySelector('.header__watch-video');
    var exit = document.querySelector('.header__overlay-video-exit');
    {
        watch.addEventListener('click', function () {
            overlay.style.display = 'block';
        }, false);
        exit.addEventListener('click', function () {
            overlay.style.display = 'none';
        }, false);
    }
}
headerOverlayVideo();