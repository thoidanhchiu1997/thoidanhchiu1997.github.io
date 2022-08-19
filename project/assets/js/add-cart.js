// Truy cập
const listShoppingCartProducts = document.querySelector(
    ".list-shopping-cart-products"
  );
  const listCartProducts = document.querySelector(".list-cart-products");
  const message = document.querySelector(".message");
  
  const subTotalMoneyEl = document.querySelector(".sub-total-money .text-danger");
  const totalMoneyEl = document.querySelector(".tottal-money .text-danger");
  
  // Format tiền VND
  const formatMoney = (number) => {
    return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  };
  
  // Lấy ra sản phẩm có trong giỏ hàng
  let items = getDataFromLocalStorage();
  
  // 1. Hiển thị sản phẩm trên giỏ hàng
  const renderCartProduct = () => {
    // Kiểm tra giỏ hàng rỗng hay không
    if (items.length == 0) {
      listCartProducts.classList.add("d-none");
    } else {
      message.classList.add("d-none");
    }
  
    // Nếu có sản phẩm thì hiển thị
    let html = "";
  
    items.forEach((p) => {
      html += `<div
        class="mini-cart-product d-flex justify-content-between position-relative"
      >
        <div class="d-flex">
          <div class="mini-cart-product-image me-3">
            <img
            src="${p.image}"
            alt="${p.name}"
            />
          </div>
          <div class="mini-cart-product-content">
            <p class="mb-2">${p.name}</p>
            <div class="mini-cart-data d-flex justify-content-between">
              <div class="change-count d-flex align-items-center">
              <span class="border d-inline-block me-3">
              <span class="py-2 px-3 d-inline-block fw-bold bg-light"
              onclick="(minusCount(${p.id}))">-</span>
              <span class="py-2 px-3 d-inline-block fw-bold">${p.count}</span>
              <span class="py-2 px-3 d-inline-block fw-bold bg-light"
              onclick="(plusCount(${p.id}))">+</span>
            </span>
              </div>
            </div>
            <span class="delete-product"
              ><i class="fa-solid fa-xmark" onclick="(deleteProduct(${p.id}))"></i
            ></span>
          </div>
        </div>
        <p class="text-danger d-flex align-items-center"> ${formatMoney(
          p.promo_price
        )}</p>
      </div>
      <hr />`;
    });
  
    listCartProducts.innerHTML = html;
  
    // Cập nhật số tiền
    updateTotalMoney(items);
  };
  
  // 1.1 Xóa sản phẩm
  const deleteProduct = (id) => {
    let isConfirm = confirm("Bạn có muốn xóa không?");
  
    if (isConfirm) {
      // Tìm kiếm sản phẩm trùng id và size
      items = items.filter((p) => p.id != id);
  
      // Lưu lại vào localStorage
      setDataFromLocalStorage(items);
  
      // Cập nhật lại số lượng
      updateTotalCart();
  
      // Hiển thị lại giao diện
      renderCartProduct(items);
    }
  };
  
  // 1.2 Thay đổi số lượng
  // Tăng số lượng
  const plusCount = (id) => {
    // Lấy ra sản phẩm tương ứng
    let product = items.find((p) => p.id == id);
  
    // Tăng số lượng
    product.count++;
  
    // Lưu lại vào localStorage
    setDataFromLocalStorage(items);
  
    // Hiển thị lại giao diện
    renderCartProduct(items);
  };
  
  // Giảm số lượng
  const minusCount = (id) => {
    // Lấy ra sản phẩm tương ứng
    let product = items.find((p) => p.id == id);
  
    // Tăng số lượng
    product.count--;
  
    if (product.count < 1) {
      product.count = 1;
    }
  
    // Lưu lại vào localStorage
    setDataFromLocalStorage(items);
  
    // Hiển thị lại giao diện
    renderCartProduct(items);
  };
  
  // 1.3 Tính tiền
  // Tính tiền
  const updateTotalMoney = (arr) => {
    // Tính thành tiền
    let totalMoney = 0;
    arr.forEach((p) => (totalMoney += p.count * p.promo_price));
  
    // Cập nhật trên giao diện
    totalMoneyEl.innerText = formatMoney(totalMoney);
  };
  
  // 2. Hiển thị danh sách ra ngoài giao diện
  const renderProduct = () => {
    // Nếu có sản phẩm thì hiển thị
    let html = "";
  
    items.forEach((p) => {
      html += `<div
       class="shopping-cart-product d-flex justify-content-between align-items-center"
     >
       <div class="mini-item d-flex my-2">
         <div class="mini-item-image me-3">
         <img
         src="${p.image}"
         alt="${p.name}"
         />
         </div>
         <div class="mini-item-content">
           <p>${p.name}</p>
           <div class="price">
             <p class="discount-price text-decoration-line-through my-1">
          ${formatMoney(p.price)}
             </p>
             <p class="fw-500">${formatMoney(p.promo_price)}</p>
           </div>
           <span
             ><i class="fa-solid fa-trash-can fw-light fs-5"
             onclick="(deleteShoppingProduct(${p.id}))"
             ></i
           ></span>
         </div>
       </div>
       <div class="change-count d-flex align-items-center mb-4">
         <span class="border d-inline-block me-3">
           <span
             class="py-2 px-3 border-end d-inline-block fw-bold btn-minus-count"
             onclick="(minusShoppingCount (${p.id}))"
             >-</span
           >
           <span class="py-2 px-3 d-inline-block fw-bold count"
             >${p.count}</span
           >
           <span
             class="py-2 px-3 border-start d-inline-block fw-bold btn-plus-count"
             onclick="(plusShoppingCount (${p.id}))"
             >+</span
           >
         </span>
       </div>
       <p class="product-money text-danger fw-500 fs-5">
       ${formatMoney(p.promo_price * p.count)}</p>
     </div>
     <hr class="my-2" />`;
    });
  
    listShoppingCartProducts.innerHTML = html;
  
    // Cập nhật số tiền
    updateShoppingTotalMoney(items);
  };
  
  // 2.1 Xóa sản phẩm
  const deleteShoppingProduct = (id) => {
    let isConfirm = confirm("Bạn có muốn xóa không?");
  
    if (isConfirm) {
      // Tìm kiếm sản phẩm trùng id và size
      items = items.filter((p) => p.id != id);
  
      // Lưu lại vào localStorage
      setDataFromLocalStorage(items);
  
      // Cập nhật lại số lượng
      updateTotalCart();
      updateTotaProducts();
  
      // Hiển thị lại giao diện
      renderProduct(items);
    }
  };
  
  // 2.2 Thay đổi số lượng
  // Tăng số lượng
  const plusShoppingCount = (id) => {
    // Lấy ra sản phẩm tương ứng
    let product = items.find((p) => p.id == id);
  
    // Tăng số lượng
    product.count++;
  
    // Lưu lại vào localStorage
    setDataFromLocalStorage(items);
  
    // Hiển thị lại giao diện
    renderProduct(items);
  };
  
  // Giảm số lượng
  const minusShoppingCount = (id) => {
    // Lấy ra sản phẩm tương ứng
    let product = items.find((p) => p.id == id);
  
    // Tăng số lượng
    product.count--;
  
    if (product.count < 1) {
      product.count = 1;
    }
  
    // Lưu lại vào localStorage
    setDataFromLocalStorage(items);
  
    // Hiển thị lại giao diện
    renderProduct(items);
  };
  
  // 4. Tính tiền
  const updateShoppingTotalMoney = (arr) => {
    // Tính tổng tiền tạm tính
    let subTotalMoney = 0;
    arr.forEach((p) => (subTotalMoney += p.count * p.promo_price));
  
    // Cập nhật trên giao diện
    subTotalMoneyEl.innerText = formatMoney(subTotalMoney);
  };
  
  // 4. Cập nhật số lượng cart
  const updateTotaProducts = () => {
    // Lấy cart từ localStorage
    let cart = getDataFromLocalStorage();
    document.querySelector(".infor-count .count").innerText = cart.length;
  };
  
  updateTotaProducts();
  
  // Cập nhật tiền
  updateShoppingTotalMoney(items);
  
  // Hiển thị
  renderProduct(items);
  
  // Cập nhật tiền
  updateTotalMoney(items);
  
  // Hiển thị
  renderCartProduct(items);
  