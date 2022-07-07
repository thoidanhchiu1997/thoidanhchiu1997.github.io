/*
1.Khái niệm API là gì 
Appication Programing InterFace(giao diện lập trình ứng dụng)
Tập hợp quy tắc mà qua đó cho phép các thành phần trong cùng 1 trang wed  hoặc các ứng dụng kết hợp tương tác như thế nào
Ví dụ thực tế
 Đi ăn nhà hàng 
KhÁCH hàng : client(font end)
Nhà bếp: sever(back end)
Khách hàng-->gọi món-->nhà bếp
Nhà bếp -->nấu món ăn--> Khách hàng 
Nhân viên: lấy thực đơn từ khách hàng-. gửi cho nhà bếp
 Nhà bếp nấu ăn xong --> nhân viên bưng món ăn lên cho khách hàng 

3.Cấu trúc như thế nào
API=http method+URL

Http method(động từ)
GET:Lấy thông tin
Post: Tạo
PUT: Cập nhập: Thay đổi món ăn 
Delete:xÓA: Hủy món ăn

URL(danh từ-resouce) users
GET/users-> lấy danh sách tất cả users
GET/users/1: Lấy thông tin của user có id là 1 
GET/users/blogs/2: Lấy thông tin blogs có id=2 của user có id =1

POST/users-> Tạo user mới(/users/create--> Hợp lệ nhưng không đúng chuẩn restful API)
{
    name:
    email:
}
POST/users/1/blogs-->Tạo blogs mới cho user có id=1
{
    title:
    content:
    ...
}
PUT/users/1-> Cập nhật thông tin cho user có id=1
{
    name:
    email:
    ...
}
DELETE/users/1--> Xóa user có id=1
4.Thực hiện  gọi API như thế
-axios(Thư viện bên thứ 3, cần phải nối link vào để thực hiện) (khuyên dùng)
-fetch(có sẵn javascript)
-AJAX(có trong jQuery, cũng cần nối link để sử dụng )
5. Test API như thế nào
- Postman 
-Extension VSCode: RESET Clinet
-Test trực tiếp trên browser(Chỉ sử dụng với API GET)
*/
const imageEL= document.getElementById('image')
const btn = document.getElementById('btn')
btn.addEventListener('click',async()=>{
    try {
        // goi API --> https://dog.ceo/api/breeds/image/random
      let res =  await axios.get('https://dog.ceo/api/breeds/image/random')
      console.log(res.data.message)
      imageEL.src = res.data.message
    } catch (error) {
        console.log(error)
        
    }

})
