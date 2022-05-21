//Thực hiện công việc thức dậy lúc 5:00 trong vòng 30 ngày
// day++
//day=day+1
//day+=1
for(let day=1; day<=30;day=day++){
    console.log(`Ngày ${day} thức dậy lúc 5:00`)
}
// Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày vào các ngày lẻ
for(let day=1;day<=30;day++){
    if(day% 2 ==1){
        console.log(`Ngày ${day} thức dậy lúc 5:00`)
    }
}

for(let day =1; day<=30; day+=2){
    console.log(`Ngày ${day} thức dậy lúc 5:00`);

}

//break: Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày, nhừng đến ngày 20 chán quá--> bỏ
for(let day=1; day <=30;day++){
    if(day==20){
        console.log('chán quá nghỉ');
        break
    }
}
console.log(`Ngày ${day} thức dậy lúc 5:00`);

// continue: thực hiện công việc thức dậy lúc 5:00 trong 30 ngày, nhừng vào ngững ngày cuôi tuần thì không thực hiện
for(let day=1; day <=30;day++){
    if(day%7==0){
        console.log('chán quá nghỉ');
        break
    }
}
console.log(`Ngày ${day} thức dậy lúc 5:00`);

//Tiết kiệm tiền
// Thực hiện tiết kiệm trong 10 ngày, mỗi ngyaf 100.000
// Sau 10 ngày có :1.000.000
//Thời điểm chưa bắt đầu tiết kiệm -->0đ
 let money=0;
 for(let money=1;let<=10;day++){
     money=money+100000
 }
 console.log("Tổng tiền sau 10 ngày tiêt kiệm là:"+money)


 // Ngày lẻ tiết kiệm 100.000
 // Ngày chẵn tiết kiệm 200.00
 for(let day=1; day<=10,day++){
     if(day%2==1){
         money+=100000;
     }else {
         money+=200000;
     }
 }
 console.log("Money=" +money);

 //3. Đến ngày số 8 hết tiền không tiết kiệm nữa
 for(let day=1;day<=10; day++){
     if(day==8){
         money+=100000;
     }
 }
 console.log("Money="+money);
 
 //4.Ngày cuối tuần đi nhậu không có tiền tiết kiệm hôm đó 
 for(let day=1;day<=10; day++){
    if(day%7==0){
        console.log('đi nhậu')
        money-=200000
        continue;
    }
    money+=100000;
}
console.log("Money="+money);


// //Thực hiện công việc thức dậy lúc 5:00 trong vòng 30 ngày
// // day++
// //day=day+1
// //day+=1
// for(let day=1; day<=30;day=day++){
//     console.log(`Ngày ${day} thức dậy lúc 5:00`)
// }

let day=1;
for(;;){
    if(day>30){
        break
    }
    console.log(`Ngày ${day} thức dậy lúc 5:00`);day++;
}