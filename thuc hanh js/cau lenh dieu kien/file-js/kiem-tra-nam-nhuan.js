let year = parseInt(prompt('Enter a year'));
let isLeapYear = false;
if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            isLeapYear=true;
        }
    }else{
        isLeapYear=true;
    }
}
        if(isLeapYear){
            alert(year+ 'Nam nhuan');
        }else {
            alert(year+ 'Nam khong nhuan');
        }




