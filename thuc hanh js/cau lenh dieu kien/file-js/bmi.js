let weight = parseInt(prompt('nhap can nang theo kg'));
let height = parseInt(prompt('nhap chieu cao theo m'));
let bmi=weight/(height*height);

if(bmi<18.5){
    alert('Underweight')
}else{
    if(bmi<25){
        alert('Nomal');
    }else{
        if(bmi<30){
            alert('Overweight');
        }else{
            alert('Obese');
        }
    }
}