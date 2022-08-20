


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})


var products = [
    {   id: 1,
        name:"ÁO SƠ MI-ART2212NT",
        img: "https://owen.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/a/r/ar220134dt_1_.jpg",
        brand: "ÁO SƠ MI",
        price: "600000",
        size: "S,M,L,XL,XXL"
    },
    {   
        id: 2,
        name:"ÁO SƠ MI-ART4343NT",
        img: "https://owen.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/a/s/as220796d.png",
        brand: "ÁO SƠ MI",
        price: "800000",
        size: "S,M,L,XL,XXL"
    },
    {   
        id: 3,
        name:"ÁO SƠ MI-ART8232NB",
        img: "https://owen.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/q/s/qs23471.jpg",
        brand: "ÁO SƠ MI",
        price: "1000000",
        size: "S,M,L,XL,XXL"
    },
    {
        id: 4,
        name:"ÁO POLO-PL2312NT",
        img: "https://owen.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/a/p/apv221135.png",
        brand: "ÁO POLO",
        price: "400000",
        size: "S,M,L,XL,XXL"
    },
    {   
        id: 5,
        name:"ÁO POLO-PL4323SN",
        img: "https://owen.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/_/3/_3m_apv221132.jpg",
        brand: "ÁO POLO",
        price: "5000000",
        size: "S,M,L,XL,XXL"
    },
    {   
        id: 6,
        name:"ÁO POLO-PL202208NB",
        img: "https://owen.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/_/3/_3m_apv221131_2_.jpg",
        brand: "ÁO POLO",
        price: "500000",
        size: "S,M,L,XL,XXL"
    },
    {   
        id: 7,
        name:"ÁO SƠ MI-SM232324NB",
        img: "https://owen.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/a/s/as220131nt_2__3.jpg",
        brand: "ÁO SƠ MI",
        price: "500000",
        size: "S,M,L,XL,XXL"
    },
    {
        id: 8,
        name:"ÁO SƠ MI-SM232123SB",
        img: "https://owen.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/z/3/z3594981116045_04577f6762d11138f87f574828aee9b0_1.jpg",
        brand: "ÁO SƠ MI",
        price: "800000",
        size: "S,M,L,XL,XXL"
    },
    {   
        id: 9,
        name:"ÁO SƠ MI-ART23232332SN",
        img: "https://owen.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/z/3/z3594981116045_04577f6762d11138f87f574828aee9b0_1.jpg",
        brand: "ÁO SƠ MI",
        price: "1000000",
        size: "S,M,L,XL,XXL"
    },
    {   
        id: 10,
        name:"Á SƠ MI-BN23232SM",
        img: "https://owen.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/a/r/ar220012nt.jpg",
        brand: "ÁO SƠ MI",
        price: "900000",
        size: "S,M,L,XL,XXL"
    },
    {   
        id: 11,
        name:"ÁO POLO-PL093278NM",
        img: "https://owen.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/a/p/apv220307_1_.jpg",
        brand: "ÁO POLO",
        price: "1300000",
        size: "S,M,L,XL,XXL"
    },
    {   
        id: 12,
        name:"ÁO SƠ MI-SM981232SN ",
        img: "https://owen.vn/media/catalog/product/cache/01755127bd64f5dde3182fd2f139143a/b/a/ba220022nt.jpg",
        brand: "ÁO SƠ MI",
        price: "1200000",
        size: "S,M,L,XL,XXL"
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
                <a href="./detail.html"><img
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
                <h4 class="name"><a href="./detail.html">${p.name}</a></h4>
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
