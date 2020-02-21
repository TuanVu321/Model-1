let time=parseInt(prompt('nhap so thoi gian goi theo giay'));
if(time<6){
    money=time*80;
}else{
    money=6*80 + (time-6)*13.33;
};
alert("so tien phai thanh toan la "+money + "dong");
