// Bài 1
function number(a){
  
    if(a%3==0 && a%5==0){
            console.log('Fizzbuzz')
         }
    else if(a%3==0){
        console.log('fizz')
         }
    else if(a%5==0){
        console.log('buzz')
         }
    else if (a%5 !=0||a%3){
            console.log('ko chia het')
             }
    
    }
    number(12)
    // Bài 2
    function ptbac1(a, b)
    {
        if (a == 0 && b == 0){
            console.log('Phương trình vô số nghiệm');
        }
        else if (a != 0 && b == 0){
            console.log('Phương trình có nghiệm x = 0');
        }
        else if (a == 0 && b != 0){
            console.log("Phương trình vô nghiệm");
        }
        else {
            console.log('Phương trình có nghiệm x = ' + (-b/a));
        }
    }
    ptbac1(6,5)
    // bài 3 
    function ptbac2(a, b,c)
    {
        if(a==0){
            x = -c/b;
            console.log('x =' + x);
        }
        else{
            if(a!=0){
                delta = b*b - 4*a*c;
                if(delta == 0){
                    x = -b/(2*a);
                    console.log('Phương trình có nghiệm kép là:');
                    console.log('x = ' + x);
                }
                else
                {
                    x1 =  (-b + Math.sqrt(delta))/(2*a);
                    x2 =  (-b - Math.sqrt(delta))/(2*a);
                    console.log('Phương trình có hai nghiệm phân biệt là:');
                    console.log('x1 = ' + x1);
                    console.log('x2 = ' + x2);
                }
            }
        }
    }
    ptbac2(3,4,1)
    
    // bài 4
    function namnhuan(a)
    {
        if(a%4==0){
            console.log("là năm nhuận");
        } else if(a%4==!0){
            console.log("Không là năm nhuận");
        }
    }
    namnhuan(2016)

    // Bài 5
    function BMI(a, b) {
        let result= a/(Math.pow(b,2));
        return result;
    }
    console.log(BMI(74,1.73))

    // bài 6
    function nhietdo(a){
        let result=a*1.8+32;
        return result;
    }
    console.log(nhietdo(10))