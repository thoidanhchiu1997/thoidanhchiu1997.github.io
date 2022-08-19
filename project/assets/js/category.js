import "../css/header.css"
import "../css/category.css"
import "../css/home.css"
import "../css/footer.css"
import "../css/index.css"


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


var products = [
    {   id: 1,
        name:"Nike Air Max Terrascape 90",
        img: "https://api.vercel.com/now/files/cc48a63d2c89794b951e922f927d9232c2ceb552/Rectangle.png",
        brand: "Nike",
        price: "3000000",
        size: "38,39,40,41,42,43"
    },
    {   
        id: 2,
        name:"Air Jordan 1 Mid SE",
        img: "https://api.vercel.com/now/files/72aa535cba9cbf8d317c1be7e72b7973aa1427d6/sp%202.png",
        brand: "Jordan",
        price: "3800000",
        size: "38,39,40,41,42,43"
    },
    {   
        id: 3,
        name:"Converse Lift Platform",
        img: "https://api.vercel.com/now/files/a6dff28d7324c974f41afb84e7f67770497abb61/conversexanh.png",
        brand: "Converse",
        price: "999999",
        size: "38,39,40,41,42,43"
    },
    {
        id: 4,
        name:"New Balance 993 Grey",
        img: "https://api.vercel.com/now/files/1695a25f826362cd83c227005246009c73f53cb1/newbalance.png",
        brand: "NewBalance",
        price: "4100000",
        size: "38,39,40,41,42,43"
    },
    {   
        id: 5,
        name:"Air Jordan 1 Retro Hight OG",
        img: "https://api.vercel.com/now/files/19b42f2f2ff8dc72c64131aad0fa5c6bd0f22a08/sp%205.png",
        brand: "Jordan",
        price: "5000000",
        size: "38,39,40,41,42,43"
    },
    {   
        id: 6,
        name:"Converse Custom Chuck Taylor",
        img: "https://api.vercel.com/now/files/657e42783e8246be5c32e6e1e7a673953ec2b112/converse.png",
        brand: "Converse",
        price: "3500000",
        size: "38,39,40,41,42,43"
    },
    {   
        id: 7,
        name:"Adidas Originals Forum 84",
        img: "https://api.vercel.com/now/files/2430a5c897a07810f1b780573c7d253716a510b2/adidas.png",
        brand: "Adidas",
        price: "1500000",
        size: "38,39,40,41,42,43"
    },
    {
        id: 8,
        name:"Nike Air Force 1 Crater Flyknit",
        img: "https://api.vercel.com/now/files/7697d3fac65b9dd2ffcabca396cd3396675eb745/sp%208.png",
        brand: "Nike",
        price: "2500000",
        size: "38,39,40,41,42,43"
    },
    {   
        id: 9,
        name:"Gucci Rhyton Mouth",
        img: "https://api.vercel.com/now/files/4035e80344bd320962d632839e1202757e21590d/gucci1.png",
        brand: "Gucci",
        price: "5500000",
        size: "38,39,40,41,42,43"
    },
    {   
        id: 10,
        name:"Jordan Delta 2 SE",
        img: "https://api.vercel.com/now/files/f751100a609981758c82e59a9ab3037a4f94f1ea/sp%204.png",
        brand: "Jordan",
        price: "900000",
        size: "38,39,40,41,42,43"
    },
    {   
        id: 11,
        name:"New Balance 57/40",
        img: "https://api.vercel.com/now/files/671fa23f0084fd89bd987ed026322ee800e464ad/nb1.png",
        brand: "NewBalance",
        price: "2900000",
        size: "38,39,40,41,42,43"
    },
    {   
        id: 12,
        name:"Converse Chuck Taylor Seasonal ",
        img: "https://api.vercel.com/now/files/dc5f19f29b10973897d22ad8f1ecadb9e3deac90/conversered.png",
        brand: "Converse",
        price: "1200000",
        size: "38,39,40,41,42,43"
    },

]


//format tiền
function formatCash(str) {
    return str.split('').reverse().reduce((prev, next, index) => {
        return ((index % 3) ? next : (next + '.')) + prev
    })
}

var productEl = document.querySelector(".products")

// hiện sản phẩm
function renderProduct(arrBrand = [] , arrPrice = []) {
    productEl.innerHTML = ""
    let html = ""
    for (let i = 0; i < products.length; i++) {
        const p =products[i]

        // lọc brand
            if (arrBrand.length > 0) {
                if (arrBrand.includes(products[i].brand)==false) continue //bỏ qua các giày không nằm trong brand đc chọn
            }
            
        // lọc giá
            if (arrPrice.length > 0) {
                    if (products[i].price <1000000 && arrPrice.includes("1")==false) continue
                    if (products[i].price >=1000000 && products[i].price <3000000 && arrPrice.includes("2")==false) continue
                    if (products[i].price >=3000000 && products[i].price <=5000000 && arrPrice.includes("3")==false) continue
                    if (products[i].price >5000000 && arrPrice.includes("4")==false) continue
                }
            
        // sắp xếp
//        
    window.ascending = function() {
        let valueSelect = document.getElementById("sort").value
         products.sort((a,b) =>{
        if (valueSelect === "tang") {
            return a.price - b.price
        } else if (valueSelect === "giam") {
            return b.price - a.price
        } else {
            return a.id - b.id
        }
    }) 
    renderProduct()
    }
              

                
        html +=`
        <div class="col-lg-4 col-6">
            <div class="card-item">
              <div class="card-image">
                <a href="/detail.html"><img
                  src="${p.img}"
                  alt="${p.name}"
                /></a>
                <div class="add-cart">
                  <div class="add">
                    <button type="button" onclick="themvaogiohang(${p.id})" class="btn-add" data-bs-toggle="modal" data-bs-target="#exampleModal"> <p>Thêm vào giỏ hàng</p></button>
                  </div>
                </div>
              </div>
              <div class="card-content">
                <h4 class="name"><a href="/detail.html">${p.name}</a></h4>
                <h4 class="price">${formatCash(p.price)} VNĐ</h4>
              </div>
            </div>
          </div>
        `
    }
    productEl.innerHTML = html
     
}


renderProduct()

window.filterS = function() {
   

  // xem user chọn brand nào thì lưu vào mảng 
  var arr1 = document.getElementsByClassName("brand")
  console.log(arr1);
  var arrBrand =[]
  for (let i=0; i<arr1.length; i++) {
      if (arr1[i].checked) {
          arrBrand.push(arr1[i].value)
          
      }
    }
    console.log(arrBrand);

    var arr2 = document.getElementsByClassName("price")
    var arrPrice =[]
    for(let i = 0; i< arr2.length; i++) {
        if (arr2[i].checked == true) arrPrice.push(arr2[i].value)
       
    }
    console.log(arrPrice);
  renderProduct(arrBrand, arrPrice)
}

const arr = document.getElementsByClassName("brand")
for (let i=0; i< arr.length; i++) {
    arr[i].addEventListener("change",filterS)
}
const arr_price = document.getElementsByClassName("price")
for (let i=0; i< arr_price.length; i++) {
    arr_price[i].addEventListener("change",filterS)
}



// const tang = document.getElementsByClassName("tang")
// console.log(tang);
// tang.addEventListener("click",sortA)

//     const sortA = products.sort((a,b) => a.price - b.price)
// console.log(sortA); 



// localStorage.setItem("cart",products)
 
// localStorage.setItem("cart",JSON.stringify(products))
// localStorage.getItem("cart")
// let data = localStorage.getItem("cart")

window.themvaogiohang = function() {
   localStorage.setItem("cart",products)
   localStorage.setItem("cart",JSON.stringify(products))
}
