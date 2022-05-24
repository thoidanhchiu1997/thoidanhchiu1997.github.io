





function text(){
    let a='a'
   for( let i=0;i<=9;i++)
   {
      a=a+"a"
   }
   console.log(a)

}
text()

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

function b3(b){
   let a="a-"
   for(let i=0;i<=b;i++)
   {
      
         a=b+'a-'
      
      }
  
   console.log(a)
}
b3()
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

function thetich(){
    let r=0
    for(i=0;i<=r;i++)
    {
       thetich=(4/3)*3.14*r*r*r
    }
   console.log(r)
}
thetich()

function b51(a,b){
   let b51=0
  
   for(let i=a+1;i<=b-1;i++)
 
      {
               b51+=i
                    
      }
     
      console.log(b51)
  
   }

   b51(3,8)

   function b5(a,b){
      let b5=0
     
      for(let i=4;i<=7;i++)
    
         {
            if(a>b){
               b5+=i
            }
                                                            
         }
         console.log(b5)
        
       
     
      }
   
      b5(8,3)

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

      function sum1(a){
         let sum1=0
        
         for(let i=0;i<=a;i++)
       
            {
               
                  sum1+=i
               }
                                                               
            }
            console.log(sum1)
           
          
        

         sum1(5)

