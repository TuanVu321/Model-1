function up() {
    let a = document.getElementById('nobita');
    a.style.top = parseInt(a.style.top) - 5 + 'px';
}

function dow() {
    let a = document.getElementById('nobita');
    a.style.top = parseInt(a.style.top) + 5 + 'px';
}

function left() {
    let a = document.getElementById('nobita');
    a.style.left = parseInt(a.style.left) + 5 + 'px';
}

function right() {
    let a = document.getElementById('nobita');
    a.style.left = parseInt(a.style.left) - 5 + 'px';
}

function moveSelection(evt) {
    switch (evt.keyCode) {
        case 37:
            left();
            break;
        case 39:
            right();
            break;
        case 38:
            up();
            break;
        case 40:
            dow();
            break;
    }
}

function docReady() {
    window.addEventListener('keydown',
        moveSelection)
}
window.onload= docReady();
