window.onload = init;

let video;
let thumb;

function init() {
    video = document.querySelector("#video");
    thumb = document.querySelector("#thumb");
}

function loadVideo() {
    video.style.display = "block";
    video.style.border = "7px solid black";
    video.height = thumb.height * 0.5625;

    thumb.style.display = "none";
    thumb.style.border = "0px solid black";
}