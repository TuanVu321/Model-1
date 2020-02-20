let userName = prompt('Who is there?');
if (userName == 'Admin') {

} else if (userName == null) {
    alert('Canceled');
} else {
    alert('I don`t know you');
}

let pass = prompt('Password?');
if (pass == 'TheMaster') {
    alert('Welcome!');
} else if (pass == null) {
    alert('Canceled');
} else {
    alert('wrong password');
}