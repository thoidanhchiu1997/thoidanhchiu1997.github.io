




let products = [
    {
        id: 1,
        img:"https://media3.scdn.vn/img3/2019/9_3/dcuqCY_simg_de2fe0_250x250_maxb.jpg",
        price: 1000000,
        
        name:"ÁO SƠ MI",
        count: 1,
    },
    {
        id: 2,
        img:"https://media3.scdn.vn/img3/2019/4_17/Pu0Ltc_simg_de2fe0_250x250_maxb.jpg",
        price:800000,
       
        name:"ÁO SƠ MI",
        count: 1,
    },
   

]


//convert tiền
function convertMoney(number) {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

}
let numberCartEl = document.getElementById("number-cart")
let productsEl = document.querySelector(".products")


//hiển thị dữ liệu trên giao diện
function renderProduct(arr) {
   
    productsEl.innerHTML = ""
    const countEl = document.querySelector(".cart-para")
    countEl.innerHTML = `Có tổng cộng ${updateTotalProduct(arr)} sản phẩm trong giỏ hàng`
    updateTotalMoney(arr)
    numberCartEl.innerHTML = updateTotalProduct(arr)

    // kiểm tra không có sản phẩm trong giỏ hàng
    if (arr.length == 0) {
        productsEl.insertAdjacentHTML("afterbegin","<li>Không có sản phẩm nào trong giỏ hàng</li>")
        return;
    }

    // có sản phẩm
   
    
    let html = ""
    for (let i = 0; i < arr.length; i++) {
    const p = arr[i]
    
        html += `
        <li class="row product-item">
        <div class="col left">
            <div class="thumnail">
                
                    <img src="${p.img}" alt="${p.name}">
                
            </div>
            <div class="product-info">
                <div class="product-name">
                    <a href="#">${p.name}</a>
                </div>
                <div class="product-price">
                    ${convertMoney(p.price)}
                </div>
                <div class="product-size">
                    size: 40
                </div>
                
            </div>
        </div>
        <div class="col right">
        <div class="quantity ">
        <button class="btn-subtract" onclick ="subtractCount(${p.id})">-</button>
        <p>${p.count}</p>
        <button class="btn-cong" onclick="addCount(${p.id})">+</button>
    </div>
    <div id="myModal" class="myModal-remove">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          
          <div class="modal-body">
            <h5 class="modal-para">Bạn có chắc chắn muốn xóa sản phẩm này ?</h5>
          </div>
          <div class="modal-footer">
            <button type="button" onclick="removeProduct(${p.id})" data-bs-dismiss="modal" class="btn  btn-ok " >ok</button>
            <button type="button" class="btn btn-secondary btn-cancel" data-bs-dismiss="modal">cancel</button>
           
          </div>
        </div>
      </div>
    </div>
  </div>
            <div class="remove">          
                <button   class="btn-remove" data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="close" >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
              </span></button>
            </div>
        </div>
    </li>
    
        `

    }
    productsEl.innerHTML= html


}

/* <div id="myModal" class="myModal-remove">
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              
              <div class="modal-body">
                <h5 class="modal-para">Bạn có chắc chắn muốn xóa sản phẩm này ?</h5>
              </div>
              <div class="modal-footer">
                <button type="button"  data-bs-dismiss="modal" class="btn  btn-ok " >ok</button>
                <button type="button" class="btn btn-secondary btn-cancel" data-bs-dismiss="modal">cancel</button>
               
              </div>
            </div>
          </div>
        </div>
      </div> */

// tính tổng số lượng sp
function updateTotalProduct(arr) {
    //duyệt vòng lặp để tính tổng các gtri của count
    let total =0;
    for (let i=0; i<arr.length;i++) {
        total += arr[i].count
    }
    return total;
}

// Xóa sản phẩm
window.removeProduct = function(id) {
     //sử dụng vòng lặp để tìm sản phẩm có id tương ứng
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            console.log(products[i].id);
            //xóa sản phẩm ra khỏi mảng products
            products.splice(i,1)
        }
    }

    // render lại giao diện
    renderProduct(products)
}

// tăng số lượng
window.addCount = function (id) {
    //sử dụng vòng lặp tìm sp có id tương ứng
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            //tăng giá trị count lên 1
            products[i].count += 1
        }
    }


    //render lại giao diện
    renderProduct(products)
}

// giảm số lượng 
window.subtractCount = function (id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            //tăng giá trị count lên 1
            products[i].count -= 1
        }
        if (products[i].count < 1) {
            //    removeProduct(id)
            products[i].count = 1
        }
    }


    //render lại giao diện
    renderProduct(products)
}
let totalMoneyEl = document.querySelector(".sum span")
   window.updateTotalMoney= function (arr) {
        let totalMoney = 0
        for (let i = 0; i < arr.length; i++) {
            //tổng tiền = count * price
            totalMoney += arr[i].count * arr[i].price
            
        }
        //cập nhật tổng tiền vào phần tử tương ứng
    totalMoneyEl.innerText = convertMoney(totalMoney)
    }

renderProduct(products)

// onclick="removeProduct(${p.id})"

// function renderCart() {
//     var gh = localStorage.getItem("cart")
//     var data = JSON.parse(gh)
//     productsEl.innerHTML = ""
//     const countEl = document.querySelector(".cart-para")
//     countEl.innerHTML = `Có tổng cộng ${updateTotalProduct(arr)} sản phẩm trong giỏ hàng`
//     updateTotalMoney(arr)
//     numberCartEl.innerHTML = updateTotalProduct(arr)

//     // kiểm tra không có sản phẩm trong giỏ hàng
//     if (arr.length == 0) {
//         productsEl.insertAdjacentHTML("afterbegin","<li>Không có sản phẩm nào trong giỏ hàng</li>")
//         return;
//     }

//     // có sản phẩm
   
    
//     let html = ""
//     for (let i = 0; i < arr.length; i++) {
//     const p = arr[i]
//     console.log(p.img);
//         html += `
//         <li class="row product-item">
//         <div class="col left">
//             <div class="thumnail">
                
//                     <img src="${p.img}" alt="${p.name}">
                
//             </div>
//             <div class="product-info">
//                 <div class="product-name">
//                     <a href="#">${p.name}</a>
//                 </div>
//                 <div class="product-price">
//                     ${convertMoney(p.price)}
//                 </div>
//                 <div class="product-size">
//                     size: 40
//                 </div>
                
//             </div>
//         </div>
//         <div class="col right">
//         <div class="quantity ">
//         <button class="btn-subtract" onclick ="subtractCount(${p.id})">-</button>
//         <p>${p.count}</p>
//         <button class="btn-cong" onclick="addCount(${p.id})">+</button>
//     </div>
        
//             <div class="remove">
            
//                 <button onclick="removeProduct(${p.id})" class="btn-remove" data-bs-toggle="modal" data-bs-target="#exampleModal"><span class="close" >
//                   <i class="fa fa-times" aria-hidden="true"></i>
//               </span></button>
//             </div>
//         </div>
//     </li>

    
//         `

//     }
//     productsEl.innerHTML= html


// } 
// renderCart()