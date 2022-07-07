//Truy cập vào các thành phần
const productListEl= document.querySelector('.product-list')
const seachFormInputEl=document.querySelector('.seach-form-input')
const btnSeach= document.querySelector('.seach-form-button')

//Tìm kiếm sản phẩm
//Tìm kiếm sản phẩm
seachFormInputEl.addEventListener('keydown',(e)=>{
    if(e.keyCode==13){
        seachProduct()
}
})
btnSeach.addEventListener('click',()=>{
    seachProduct()
})


const seachProduct = ()=>{
    let value = seachFormInputEl.value;
        if(value == ''){
            alert('Từ khóa không được để trống')
            return;
        }
        let productFilter = products.filter(p =>p.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
        renderProduct(productFilter)
    }

    

// Hiển thị danh sách sản phẩm
const renderProduct= arr=>{
    productListEl.innerHTML=""
    //Kiểm tra xem có sản phẩm không
    let html=""
    arr.forEach(p=>{
        html+= `<div class="col-md-3">
        <a href="./detail.html?id=${p.id}">
            <div class="product-item shadow-sm rounded mb-4">
                <div class="product-item-image">
                    <img src="${p.images[0]}"
                        alt="${p.name}">
                </div>
                <div class="product-item-info p-3">
                    <h2 class="fs-5 mb-4 text-dark">${p.name}</h2>
                    <div class="d-flex justify-content-between align-items-center fw-light text-black-50">
                        <p class="type fs-5 text-danger fw-normal">${fomatMoney(p.price)}</p>
                        <p class="rating">
                            ${p.rating}<span class="text-warning"><i class="fa-solid fa-star"></i></span>
                        </p>
                    </div>
                </div>
            </div>
        </a>
    </div>`
        
    })
    productListEl.innerHTML=html
}
//Format tiền-VND
const fomatMoney=number=>{
    return number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}
renderProduct(products)
