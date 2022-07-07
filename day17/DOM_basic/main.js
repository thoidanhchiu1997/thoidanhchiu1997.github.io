// truy cap thong qua id
const heading = document.getElementById("heading");
console.log(heading);

// truy cap thong qua tagname
// HTMLCollection ==> giong nhu mang,nhung thuc chat ko phai mang
// HTMLCollection la tap hop cac node o dang element node
// node :element node , text node , comment node,attribute node .......
const paras = document.getElementsByTagName("p");
console.log(paras);

console.log(paras[0]);
console.log(paras.length);

// duyet htmlcollection
for (let i = 0; i < paras.length; i++) {
  console.log(paras[i]);
  paras[i].style.color = "pink";
}

Array.from(paras).forEach((element) => {
  console.log(element);
});

// truy cap thong qua ten class
const parasClassName = document.getElementsByClassName("para");
console.log(parasClassName);

// truy cap thong qua CSS selector
const h1 = document.querySelector("#heading");
console.log(h1);

const para1 = document.querySelector("p");
console.log(para1);
const para2 = document.querySelector(".para");
console.log(para2);
const para3 = document.querySelector("body p:nth-child(4)");
console.log(para3);
const ul2 = document.querySelector(".box + ul");
console.log(ul2);
const ul1 = document.querySelector("ul");
console.log(ul1);
const pInUl2 = document.querySelectorAll(".box + ul li");
console.log(pInUl2);
ul2.querySelectorAll("li");
console.log(ul2.querySelectorAll("li"));

console.log(para3.nextElementSibling);
console.log(ul2.parentElement);
console.log(ul2.children);
console.log(ul2.firstElementChild);

heading.style.color = "red";
heading.style.backgroundColor = "black";

// lay ra noi dung
console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);
console.log(ul1.innerHTML);
console.log(ul1.innerText);
console.log(ul1.textContent);

heading.innerHTML = 'HELLO'
heading.innerHTML = '<span> xin chao cac ban </span>'
// heading.innerText = '<span> xin chao cac ban </span>'
// heading.textContent = '<span> xin chao cac ban </span>'
console.log( document.body.prepend(para1))
console.log(document.body.append(para1))

//Thêm phần tử
const box= document.querySelector('box')


document.body.insertBefore(para1,para3)

//Tạo phần tử DOM
// Ví dụ : Tạo ra thẻ a(google)
const link=document.createElement('a')
link.innerText='Trang google'
link.href='https://www.google.com.vn/?hl=vi'
console.log(link)
document.body.prepend(link)
document.body.insertBefore(link,ul2)

// Tạo thẻ input, type="text", placeholder="Enter name"
//Ví trí: Đằng trước para2 

const input=document.createElement('input')
input.placeholder='Enter name'
input.type='Text'
document.body.insertBefore(input,para2)
console.log(input)

// document.body.insertAdjacentElement("afterbegin",link)
heading.insertAdjacentElement("beforebegin",link)


//Sử dụng vòng lặp để tạo nội dung và insert
let links=[
    {
        link:"https://www.facebook.com/",
        title:"Trang facebook"
    },

    {
        link:"https://zingnews.vn/",
        title:"Trang Zing"
    },

    
]
//Truy cập
const socialMedia=document.querySelector(".social-media")

// Cách 1:Tạo thẻ ->chèn
// links.forEach(ele=>{
//     const link=document.createElement('a')
//     link.innerText=ele.title;
//     link.href=ele.link;
//     socialMedia.appendChild(link)
// })
// Cách 2 : Insert trực tiếp html-> insertAdjacentHTML
// links.forEach(ele=>{
//     socialMedia.insertAdjacentHTML("beforeend",`a href="${ele.link}">${ele.title}</a>`)
// })
// Cách 2: Insert trực tiếp html->innerHTML
// let html="";
// links.forEach(ele=>{
//     html+=`<a href="${ele.link}">${ele.title}</a>`
// })
// socialMedia.innerHTML=html;

//Cách 4: insert trực tiếp HTML->InnerHTML
links.forEach(ele=>{
    socialMedia.innerHTML+=`<a href="${ele.link}">${ele.title}</a>`
})

document.body.removeChild(heading);
 
// heading.parentElement.removeChild(heading); xóa
//Thay thế c
const h3=document.createElement("h3")
h3.innerText="Đây là thẻ h3"

document.body.replaceChild(h3,para3)

//Sao chép
// const boxCopyTrue = box.cloneNode(true)
// const boxCopyFalse = box.cloneNode(false)

// console.log(boxCopyTrue)
// console.log(boxCopyFalse)
