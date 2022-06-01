// khai báo mảng rỗng
let arrEmty=[]
//Khai báo mảng sau đó chèn dữ liệu cho mảng
let=names=[]
names[0]='An'
names[1]='hòa'
names[2]='tuấn'
console.log(names)

//Vừa khai báo, vừa khởi tạo giá trị
let numbers=[1,2,3,4,5];
console.log(numbers)

//Lấy ra giá trị cuản mảng thông qua chỉ số 

console.log(numbers[0])
console.log(numbers[2])
console.log(numbers[4])
console.log(numbers[numbers.length-1]);

//Sét lại giá trị

numbers[0]=10;
console.log(numbers)

let numbersOther=numbers;
console.log(numbersOther)
// tháy dổi giá trị trong mảng numbersOther
numbersOther[1]=20
console.log(numbers);
console.log(numbersOther)

//Ví dụ
let arr=[1,2,3]
let arr1=[1,2,3];
let arr2=arr1
let arr3=arr1.sort().reverse();
let text="1,2,3"

console.log(arr=arr1);//false
console.log(arr==arr2)//false
console.log(arr2=arr3)//true
console.log(arr=text)//true
console.log(arr3=text)//false

//Duyệt mảng
for(let i=0; i<numbers.length;i++){
    console.log(numbers[i]);
}

// Tính tổng 
let total=0
for(let i=0;i<numbers.length;i++){
    total+=numbers[i];
}
console.log(total)

//Tính tổng số lẻ
let totalOdd= 0
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==1){
        totalOdd+=numbers[i]
    }
}
console.log(totalOdd)

//Lấy ra mảng số chẵn
//[10,20,3,4,5]-->[10,20,4]
//pop, push,unshift,shift,splice
let newArr=[]
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        newArr.push(numbers[i]);
    }
}
console.log(newArr)


function checkArrAsc(arr) {
    // Sử dụng vòng for để duyệt mảng
    // Kiểm tra nếu tồn tại phần tử đằng trước > phần tử đằng sau => Không tăng dần


for(let i=0;i<numbers.length;i++){
    if(arr[i]>arr[i+1]){ // i=length-1+1=length-->arrlarr
        return false
    }
}
return true
}
console.log(checkArrAsc([1,2,3,6]))

// Câu 4: Kiểm tra mảng có phải là mảng số chẵn tăng dần hay không

function checkEvenArrAsc(arr) {
    // Bước 1: Kiểm tra mảng số chẵn
    // Nếu không phải mảng chẵn => false

    
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==1){
            return false
        }
    }
    // Trường hợp là mảng chẵn thì tiếp tục kiểm tra tăng dần

    // Bước 2: Kiểm tra tăng dần
    return checkEvenArrAsc(arr);
}

console.log(checkEvenArrAsc([1,3,4,6,7]))
console.log(checkEvenArrAsc([2,4,6,8]))