function caculator1() {
    let d = document.getElementById('so1').value;
    let e = document.getElementById('so2').value;
    let a = parseInt(d);
    let b = parseInt(e);
    let c = null;
    c = a + b
    display(c);
}

function caculator2() {
    let d = document.getElementById('so1').value;
    let e = document.getElementById('so2').value;
    let a = parseInt(d);
    let b = parseInt(e);
    let c = null;
    c = a - b;
    display(c);
}

function caculator3() {
    let d = document.getElementById('so1').value;
    let e = document.getElementById('so2').value;
    let a = parseInt(d);
    let b = parseInt(e);
    let c = null;
    c = a * b;
    display(c);
}

function caculator4() {
    let d = document.getElementById('so1').value;
    let e = document.getElementById('so2').value;
    let a = parseInt(d);
    let b = parseInt(e);
    let c = null;
    c = a / b;
    display(c);
}

function display(value) {
    document.getElementById('recall').innerHTML = value;
}