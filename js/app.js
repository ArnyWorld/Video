const playVideo = document.querySelector(".bi-play-circle-fill");
const pauseVideo = document.querySelector(".bi-pause-circle-fill");
const video = document.querySelector(".video-container");


let sw = true;

video.addEventListener("click", () => {
    if (sw) {
        video.play();
    } else {
        video.pause();
    }
    sw = !sw;
})

video.addEventListener("playing", () => {
    pauseVideo.classList.remove("show")
    playVideo.classList.add("show");

});

video.addEventListener("pause", () => {
    playVideo.classList.remove("show");
    pauseVideo.classList.add("show");
});

const preloader = document.querySelector(".preloader");
window.addEventListener("load", function() {
    preloader.classList.add("hide-preloader");
})