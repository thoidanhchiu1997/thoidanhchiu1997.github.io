// Một tính năng mới vào gói Pro: ‘24/7 Phone support’
const li=document.createElement('li')

li.innerText='24/7 Phone support';
document.querySelector('#pro-plan ul').appendChild(li)
// Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)
const cards=document.querySelectorAll('.col-md-4')
const row=document.querySelector('.row')

row.innerHTML= ' ';
row.appendChild(cards[1])
row.appendChild(cards[0])

// Trong gói Pro hãy cập nhật nút ‘Get Started’ hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’
let btnPro=document.querySelector('#pro-plan button')
btnPro.style.backgroundColor= '#0984e3'
btnPro.style.color= '#fff'
btnPro.innerText='Buy now'
// Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%

