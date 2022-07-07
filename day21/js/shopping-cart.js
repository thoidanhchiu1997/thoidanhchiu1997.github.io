// Truy cập vào các thành phần
const productListEl=document.querySelector(".product-list")
// Lấy danh sách sản phẩm đang có trong giỏ hàng
let item=getDataFromLocalStorage()
//Hiển thị danh sách sản phẩm ngoài giao diện
const renderProduct= arr=>{
    productListEl.innerHTML=''
  let html=""
  arr.forEach(e=>{
    html+= `<div class="product-item d-flex border mb-4">
    <div class="image">
        <img src="${e.image}" alt="" />
    </div>
    <div class="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
        <div>
            <div class="d-flex justify-content-between align-items-center">
                <h2 class="text-dark fs-5 fw-normal">
                  ${e.name}.${e.size} (M)
                </h2>
                <h2 class="text-danger fs-5 fw-normal">
                    ${e.price}
                </h2>
            </div>
            <p class="text-black-50">
                <span class="border d-inline-block me-3">
                    <span class="py-2 px-3 d-inline-block fw-bold bg-light"onclick="deleteProduct(${e.id},'${e.size}">-</span>
                    <span class="py-2 px-3 d-inline-block fw-bold">${e.count}</span>
                    <span class="py-2 px-3 d-inline-block fw-bold bg-light">+</span>
                </span>
            </p>
        </div>
        <div>
            <button class="text-primary border-0 bg-transparent fw-light"onclick="deleteProduct(${e.id},'${e.size}">
                <span><i class="fa-solid fa-trash-can"></i></span>
                Xóa
            </button>
        </div>
    </div>
</div>`

  })
  productListEl.innerHTML=html
}
renderProduct(item)
 
// Xóa sản phẩm 
const deleteProduct=(id,size)=>{
    //Xác nhận xem có muốn xóa không
    let isConfirm=confirm("Bạn có muốn xóa không?")
    if(isConfirm){
        items=items.filter(p=>p.id !=id || p.size!=size)
        // Lưu lại vào trong localStorage
        renderProduct(item)
        // Cập nhật số lại số lượng
        updateTotalCart
        //Hiện thị lại trên giao diện
        renderProduct(items)

    }
}
// Tăng số lượng
const plusCount=(id,size)=>{
    //Lấy sản phẩm tương ứng
    let product=items.find(p=>p,id && p.size==size)
    // Tăng số lượng 
    product.count++
    //Lưu lại localStorage
    setDataTolacalStorage(items)
    //Hiển thị giao diện
    renderProduct(items)
}
// Giamr số lượng
const minusCount=(id,size)=>{
    //Lấy sản phẩm tương ứng
    let product=items.find(p=>p,id && p.size==size)
    // Giam số lượng 
    product.count--
    if(product.count<1){
        product.count=1
    }
    //Lưu lại localStorage
    setDataTolacalStorage(items)
    //Hiển thị giao diện
    renderProduct(items)
}
let subTotal=document.querySelector('.sub-total-money')
let totalEle=document.querySelector('.discount-money')
function updateTotalMoney(arr){
    let totalMoney=0
    for(i=0;i<arr.length;i++){
        const p =arr[i]
        totalMoney+=p.count+p.price
    }

subTotal.innerText= convertMoney(totalMoney)
totalEle.innerText = convertMoney(totalMoney * 1.05);
}
