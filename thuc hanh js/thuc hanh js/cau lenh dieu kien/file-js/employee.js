let login = prompt('Nhap gia tri');
let message = (login == 'Employee') ?
    'Hello' :
    (login == 'Director') ? 'Greetings' :
        (login == '') ? 'No login' : ''

alert(message);