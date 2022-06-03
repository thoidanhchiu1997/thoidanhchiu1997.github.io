//1. Funcition expression
function sum(a,b){
    return a+b
}
console.log(sum(10,20))
//Anonymous function: Function không có tên (vô danh, ẩn danh)
const sum1=function(a,b){
    return a+b;
}
console.log(sum1(3,4))

//2. Higher Order Function (HOF): Function bậc cao
// Truyền vào làm tham số cho function khác
const filterNumber=function(arr,func){
    let newArr=[]
    for (i=0;i<arr.length;i++){
        if(func(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr;
}


let data1= filterNumber([1,2,3,4,5,6],function(ele){
    return ele%2==1
})
console.log(data1)


let data2= filterNumber([1,2,3,4,5,6],function(ele){
    return ele > 3
})
console.log(data2)
//Có thể được trả về từ functions khác.

const sum2= function(a,b){
    return function(c){
        return a+b+c
    }
}

// let func=sum2(10,20);
// console.log(func);

// let data= func(30);
// console.log(data);

let data = sum2(10,20)(30);
console.log(data)

//  Arrow function
// Function sum(a,b){
//     return a+b;
// }
// const sum3=(a,b)=>{
//         return a+b
// }
const sum3=(a,b)=> a+b;
console.log(sum3(5,6))


//***************ForEach *****************
//Khai báo mảng các số
let numbers=[1,2,3,4,5,6]

//In ra các phần tử trong mảng 

for(let i=0;i<numbers.length;i++){
    console.log(numbers[i])
}

//Value: numbers[i]
//index:i


numbers.forEach((Value,index)=>{
    console.log(`index:${index}-value:${Value}`)
})

// Tính tổng
let total=0;
numbers.forEach((Value)=>{
    total+=Value
})

console.log(total)


// In ra các giá trị số lẻ 

numbers.forEach(Value=>{
    if(Value%2==0){
        return
    }
    console.log(Value)
} )

//***************For...of *****************
//In ra các giá trị của mảng 


//Copy
let numbersCopy=numbers.slice()
let numbersCopy1=numbers.slice()

numbersCopy.push(100)