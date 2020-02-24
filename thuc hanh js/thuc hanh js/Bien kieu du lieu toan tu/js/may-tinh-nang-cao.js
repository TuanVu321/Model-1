let object_test = {
    '+': function (x, y) {
        return x + y
    },
    '-': function (x, y) {
        return x - y
    },
    '*': function (x, y) {
        return x * y
    },
    '/': function (x, y) {
        return x / y
    }
}


function caculator(x) {

    let test1 = parseInt(document.getElementById("so1").value);
    let test2 = parseInt(document.getElementById("so2").value);
    let final = object_test[x](test1, test2);
    display(final)
}

function display(value) {
    document.getElementById('recall').innerHTML = value;
}