// // bai1
//    let  degC=parseInt(prompt('Nhap nhiet do theo do C'));
// let degF=(degC*9)/5+32;
// alert(degF+' do F');

// // bai2
// let length=parseInt(prompt('nhap do dai theo m'));
// let change=length*3.2808;
// alert(change+" FT");

// // bai3
//
// let length=parseInt(prompt('nhap do dai canh hinh vuong'));
// let area=length*length;
// alert('Dien tich hinh vuong la: '+area);


// // Bai 4
//
// let width=parseInt(prompt('Nhap chieu rong'));
// let length=parseInt(prompt('Nhap chieu dai'));
// let area= width*length;
// alert('Dien tich hinh chu nhat la: '+area);

// //Bai 5
//
// let width=parseInt(prompt('Nhap chieu day tam giac'));
// let height=parseInt(prompt('Nhap chieu cao tuong ung voi day do'));
// let area= width*height*0.5;
// alert('Dien tich hinh tam giac la: '+area);


//Bai 6
//
// let a=parseInt(prompt('nhap a'));
// let b=parseInt(prompt('nhap b'));
// if(a==0){
//     if(b==0){
//         alert('Phuong trinh vo so nghiem')
//     }else{
//         alert('Phuong trinh vo nghiem');
//     }
// }else {
//     let c=-b/a;
//     alert('Phuong trinh co nghiem la: '+c);
// };

// //Bai 7
// let a = parseInt(prompt('nhap a'));
// let b = parseInt(prompt('nhap b'));
// let c = parseInt(prompt('nhap c'));
// if (a == 0) {
//     if (b==0){
//         if(c==0){
//             alert('Phuong trinh vo so nghiem');
//         }else {
//             alert('Phuong trinh vo nghiem');
//         }
//     }else{
//         let x=-c/b;
//         alert('Phuong trinh co nghiem la: '+x );
//     }
//         } else{
//     delta=b*b-4*a*c
//     if(delta<0){
//         alert('Phuong trinh vo nghiem');
//     }else{
//         if(delta==0){
//             let x=-b/(2*a);
//             alert('Phuong trinh co 2 nghiem trung nhau:'+x)
//         }else{
//             let x1=(-b+ Math.sqrt(delta))/(2*a);
//             let x2=(b+ Math.sqrt(delta))/(2*a);
//             alert('Phuong trinh co 2 nghiem la: '+"x1 = "+x1 +'; x2 = '+x2);
//         }
//     }
// }


// // Bai 8
// let age = parseInt(prompt('Nhap so tuoi'));
// if (Number.isInteger(age) && age > 0 && age < 120) {
//     alert('Day la so tuoi cua mot nguoi');
// } else {
//     alert('Day khong phai la so tuoi cua mot nguoi');
// }
// ;
//

//
// //Bai 9
// let a = parseInt(prompt('nhap a'));
// let b = parseInt(prompt('nhap b'));
// let c = parseInt(prompt('nhap c'));
// if(a>0&&b>0&&c>0&&(a+b)>c&&(b+c)>a&&(a+c)>b){
//     alert('Ba so tren la canh cua mot tam giac');
// }else{
//     alert('Ba so tren khong phai la canh cua mot tam giac');
// }
// //Bai 10
//
// let kw=parseInt(prompt('Nhap so kw tieu thu trong thang'));
// if(kw<=50){
//     money=kw*1678;
// }else{
//     if(kw<=100){
//         money=50*1678+(kw-100)*1734;
//     }else{
//         if(kw<=200){
//             money=50*1678+50*1734+(kw*2014);
//         }else{
//             if(kw<=300){
//                 money=50-1678+50*1734+100*2014+(kw-200)*2536;
//             }else{
//                 if(kw<=400){
//                     money=50-1678+50*1734+100*2014+100*2536+(kw-300)*2834;
//                 }else{money=50-1678+50*1734+100*2014+100*2536+100*2834+(kw-400)*2461;}
//             }
//         }
//     }
// }
// alert('so tien dien phai tra la: '+money);

//Bai 11
let pv=parseInt(prompt('nhap so tien ban dau muon gui'));
let n=parseInt(prompt('nhap so nam muon gui'));
let i=parseInt(prompt('Nhap lai suat ngan hang theo phan tram'));
let fv=pv*Math.pow((1+i),n);
alert('So tien nhan duoc sau '+i+" nam la: "+fv);