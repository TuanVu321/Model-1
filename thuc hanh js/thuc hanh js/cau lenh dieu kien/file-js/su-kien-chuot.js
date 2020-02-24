let imgball = null;
function init() {
    imgball = document.getElementById('ball');
    imgball.style.position='relative';
    imgball.style.right = "0px";
}
function moveRight() {
imgball.style.right = parseInt(imgball.style.right) - 10 + "px";
}
window.onload=init;
