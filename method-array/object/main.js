//Khai báo object
let emtyObj={};

//Khai báo object có giá trị
//Property: Đặc điểm, tính chất của đối tượng
//Method: Hành vi, hành động
let student={
    id:1,
    name:"Nguyễn Văn A",
    email: 'a@gmail.com',
    status: false,
    address:{
        city:"Hà Nội",
        district:"Thanh Xuân"


    },
    // goToScholl(){
    //     console.log('Đi học')
    // }
    showInfo: function(){
        console.log(`Name:{this Name},email:${this,this.email}`)
    }
    
}

// Lấy ra thông tin
console.log(student.email);
console.log(student.name)
console.log(student.address.city)

// Set lại thông tin

student.email ='nguyena@gmail.com';
student.address.district='Đống Đa';

console.log(student);
//Thêm thuộc tính 
student.point=9;

console.log(student);
// Xóa thuộc tính 

delete student.status;
console.log(student);

// Gọi phương thức
student.showInfo

//Phương thúc 
//1. Lấy danh sách key
console.log(Object.keys(student))

let keys=Object.keys(student)
keys.forEach(key=>{
    console.log(student[key])
})
//Sử dụng for..in
for(const key in student){
    console.log(student[key])
}
//2. Lấy danh sách value=> Trả về mảng
console.log(Object.values(student))
//3. Kiểm tra 1 key có tồn tại trong object hay không=> true/false
console.log(student.hasOwnProperty("email"))
console.log(student.hasOwnProperty("name"));
