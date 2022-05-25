




// b1
function text(){
    let a='a'
   for( let i=0;i<=9;i++)
   {
      a=a+"a"
   }
   console.log(a)

}
text()
// b2
function b2(){
   let a="a-"
   for(let i=0;i<=9;i++)
   {
      if(i<9){
         a=a+"a-"
      
      }else if(i=9){
         a=a+"a"
      }
   }
   console.log(a)
}
b2()


// b4
//  số chia hết cho 5 trong khoảng 0-100
function b4(){
   let b4=0
   for(let i=0;i<=99;i++)
   {
      if(i%5==0){
         b4+=1
      }
   }
   console.log(b4)
}
b4()
// Tổng giá trị các số chia hết cho 5 trong khoảng 0-100
function b4a(){
   let b4a=0
   for(let i=0;i<=100;i++)
   {
      if(i%5==0){
         b4a+=i
      }
   }
   console.log(b4a)
}
b4a()
                 
         
      // b7
      function snt(n)
      {
          
          let now = true;
      
          if (n < 2){
              now = false;
          }
          else{
              
              for (let i = 2; i < n-1; i++)
              {
                  if (n % i == 0){
                      now = false;
                      break;
                  }
              }
          }
       
         
          if (now == true){
              console.log(n + " là số nguyên tố ");
          }
          else{
              console.log(n + " không phải là số nguyên tố ");
          }
      }  
      snt(10)
// b6
      function tong(a, b) {
         let soLon = 0;
         let soBe = 0;
         if (a >= b) {
           soLon = a;
           soBe = b;
         } else {
           soLon = b;
           soBe = a;
         }
       
         let soLon1 = soLon - 1;
         let soBe1 = soBe + 1;
         let cacSoHang = soLon1 - soBe1 + 1;
         let tong = ((soBe1 + soLon1) * cacSoHang) / 2;
       
         return tong;
       }
       console.log(tong(8,3))

// b8
      
         function kiemtrasnt(n)
         {
           
             var flag = true;
          
             
             if (n < 2) {
                 flag = false;
             }
             else if (n == 2) {
                 flag = true;
             }
             else if (n % 2 == 0) {
                 flag = false;
             }
             else {
                
                 for (var i = 3; i <= Math.sqrt(n); i += 2)
                 {
                     if (n % i == 0) {
                         flag = false;
                         break;
                     }
                 }
             }
          
             return flag;
         }
       
         function cacsnt(a)
{
  let cacsnt=0         
    for (let i = 1; i <= a; i++) {
       
        if (kiemtrasnt(i)){ cacsnt+=i}
    }
    console.log(cacsnt)
   }    
   cacsnt(13)    
   // b9
  function uocso(a){
     let uocso=0
     for(let i=0;i<=a;i++)
     {
        if(a%i==0){uocso+=i}
     }
     console.log(uocso)
  }
   uocso(8)
               
