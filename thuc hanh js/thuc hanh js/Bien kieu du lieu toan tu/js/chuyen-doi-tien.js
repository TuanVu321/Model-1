
function moneychange() {
    let c= document.getElementById('tien').value;
    let a = parseInt(c);
    let b = null;
    let d=document.getElementById('select1').value;
    let e=document.getElementById('select2').value;
    if(d==='VN' && e==='USD'){
        b = a * (1 / 23000);
        document.getElementById('result').innerHTML = "gia tri quy doi la "+b;
    } else if(d==='USD' && e==='VN'){
        b = a*23000;
        document.getElementById('result').innerHTML = "gia tri quy doi la "+b;
    } else {
        b=a;
        document.getElementById('result').innerHTML = "gia tri quy doi la "+b;
    }
}
