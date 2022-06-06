// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.


function sortStudents(arr){
    return arr.sort().reverse()
}
console.log(sortStudents(['nam','tan','khanh']))

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
 shuffleArray = [1,3,5,6,2,1]

 const shuffle=(arr)=>{
 arr.sort(function() { 
    return 0.5 - Math.random();});}
    console.log(shuffleArray);
    
   
// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng


function symmetricDifference(arr,brr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
      if (brr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
      
    }
    for (let i = 0; i < brr.length; i++) {
        if (arr.indexOf(brr[i]) === -1) {
          newArr.push(brr[i]) 
          
        }
   
  }
  return newArr
}
  console.log(symmetricDifference([1, 2, 3], [1, 2, 4]))

  // Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

  
function union(xrr=[],zrr=[]) {
  let crr = []
  for (let i = 0; i < xrr.length; i++) {
    if (zrr.indexOf(xrr[i]) === -1) {
      newArr.push(xrr[i])
    }
    
  }
  for (let i = 0; i < zrr.length; i++) {
      if (xrr.indexOf(zrr[i]) === -1) {
        newArr.push(zrr[i]) 
        
      }
 
}
return crr
}
console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]))



  

 