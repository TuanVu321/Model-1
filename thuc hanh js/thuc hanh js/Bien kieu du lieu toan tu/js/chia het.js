

let nhap_so_a = prompt('nhap so a');
let nhap_so_b = prompt('nhap so b');
let a = parseInt(nhap_so_a);
let b = parseInt(nhap_so_b);
let c = a%b;
if (c === 0) {
    alert('a chia het cho b');
} else {
    alert('a khong chia het cho b');
}
;