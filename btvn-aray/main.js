// Bài 1: Tìm số lớn nhất trong mảng
function maxElement(array) {

  let max = array[0];

  for (let i = 0; i < array.length; ++i) {
    if (max < array[i]) {
      max = array[i];

    }
  }
  console.log("max= ", max);

}

let num = [5, 4, 7, 2, 8, 7, 3];

maxElement(num);

// Bài 2: Tìm số nhỏ nhất trong mảng
function minElement(array) {

  let min = array[0];

  for (let i = 0; i < array.length; ++i) {
    if (min > array[i]) {
      min = array[i];

    }
  }
  console.log("min= ", min);

}

let trum = [5, 4, 7, 2, 8, 7, 3];

minElement(trum);


// Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

// Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]
function checkEvenArrAsc(arr) {
  

  
  for(let i=0;i<arr.length;i++){
      if(arr[i] %2==1){arr[i]=1
           
      }else if(arr[i] %2==0){arr[i]=0   
        }
      
  }
  
  console.log(arr)
}

checkEvenArrAsc([2,4,9,7])

// Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
function repeat1(str) {
  return str.repeat(10);
}
console.log(repeat1("a"));
// Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’
function repeat2(str) {
  let result = "";
  for (let i = 0; i < 10; i++) {
    result += `${str}-`;
  }
  return result.slice(0, result.length - 1);
}
console.log(repeat2("a"));
