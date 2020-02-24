function change() {
    let month = parseInt(document.getElementById('month').value);
    if (month < 1 && month > 12) {
        document.getElementById('kq').innerHTML= 'khong co thang nay';
    } else {
        switch (month) {
            case 2:
                document.getElementById('kq').innerHTML = 'Thang co 28 hoac 29 ngay';
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                document.getElementById('kq').innerHTML = 'Thang co 30 ngay';
                break;
            default:
                document.getElementById('kq').innerHTML = 'Thang co 31 ngay';
                break;

        }
    }

}
