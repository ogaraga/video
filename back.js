var preloader = document.querySelector(".preloader"),
    pause = document.querySelector(".fa-pause"),
    play = document.querySelector(".fa-play"),
    videoBackg = document.querySelector(".video_container"),
    video = document.querySelector("#video");

window.addEventListener("load", () => {
    preloader.style.display = "grid";
    setTimeout(() => {
        videoBackg.style.display = "block";
    }, 6000);
})
pause.addEventListener("click", () => {
    if (play.style.display === "none") {
        pause.style.display = "none";
        play.style.display = "block";
        video.pause();
    }
    else {
        pause.style.display = "block";
        play.style.display = "none";
        video.play();
    }
})
play.addEventListener("click", () => {
    if (pause.style.display === "none") {
        pause.style.display = "block";
        play.style.display = "none";
        video.play();
    }
    else {
        pause.style.display = "none";
        play.style.display = "block";
        video.pause();
    }
});