// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó

// // Ví dụ:
// getRandomElement([3, 7, 9, 11]) => 3
// getRandomElement([3, 7, 9, 11]) => 9
 function getRandomElement(arr) {
     
    if (arr && arr.length) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
}
console.log(getRandomElement([3, 7, 9, 11]))
// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

// // Ví dụ:
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
// similarity([1, 2, 3], [3, 4, 5]) => [3]


function similarity(arr,brr) {
    var newArr = []
    for (let i = 0; i < arr.length; i++) {
        for ( let j =0;j <brr.length;j++){
            // neu phan tu arr[i]=brr[j] -->push vao mang newArr 
            if(arr[i]==brr[j]){  
                newArr.push(arr[i])
            }
        }
    }
      
  return newArr
}
  console.log(similarity([1, 2, 6], [1, 2,9 ,3]))

//   Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

// Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất

// // Ví dụ:
// max2Numbers([2, 1, 3, 4]) => 3
// max2Numbers([2, 1, 4, 3, 4]) => 3

let max2Numbers=[2, 1, 3, ,4,4]

max2Numbers.sort(function(a, b) {
    return a - b;
  });
  console.log("max= ",max2Numbers[max2Numbers.length-1]);
  
  n = 2
  console.log("max thứ "+n +"= ",max2Numbers[max2Numbers.length-n]);
//   Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

// // Ví dụ:
// getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].
function findLongestWord(str) {
    // gan chuoi dai nhat la 1 mang  rong
    let maxLength = [];
    for (let i = 0; i < str.length; i++) {
      // neu str[i] > maxlength -->str[i] la chuoi dai nhat --> push vao maxlength
      if (str[i].length > maxLength) {
        maxLength.push(str[i]);
      }
      return maxLength;
    }
  }
  
  console.log(findLongestWord(["nam", "tuan", "tu","hoai"]));


//   Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

  getCountElement=(["one", "two", "three", "one", "one", "three"])

// Kết quả


/*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/

/*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/
function getCountElement(){
result = { };
for(let i = 0; i < getCountElement.length; ++i) {
    if(!result[getCountElement[i]])
        result[getCountElement[i]] = 1;
    ++result[getCountElement[i]];
    return result
}
console.log(result)
}



// Bài 6 (2 điểm). Cho mảng users như sau:

users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
function findProductByAge(){
const findProductByAge1=(arr,money)=>{
    return arr.filter(users => users.age>money && users.isStatus==true)
}
console.log(findProductByAge1(users,25))
}
findProductByAge()

const findUsers1=users.sort((a,b) =>a.age-b.age) 
console.log(findUsers1)

