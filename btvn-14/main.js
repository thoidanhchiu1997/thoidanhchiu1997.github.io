// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.


function sortStudents(arr){
    return arr.sort().reverse()
}
console.log(sortStudents(['nam','tan','khanh']))

// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
 shuffleArray = [1,3,5,6,2,1]
 shuffleArray.sort(function() {
    return 0.5 - Math.random();});
    console.log(shuffleArray);
// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng


function symmetricDifference(arr,brr) {
    var newArr = []
    for (var i = 0; i < arr.length; i++) {
      if (brr.indexOf(arr[i]) === -1) {
        newArr.push(arr[i])
      }
      
    }
    for (var i = 0; i < brr.length; i++) {
        if (arr.indexOf(brr[i]) === -1) {
          newArr.push(brr[i]) 
          
        }
   
  }
  return newArr
}
  console.log(symmetricDifference([1, 2, 3], [1, 2, 4]))

 