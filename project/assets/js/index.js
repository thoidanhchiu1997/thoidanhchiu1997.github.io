// 1. Slick slider
$(document).ready(function () {
    $(".products-slider").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  
  $(document).ready(function () {
    $(".news-slider").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  
  $(document).ready(function () {
    $(".feedback-slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
    });
  });
  
  // 2. Đếm ngược thời gian KM
  let countDownDate = new Date("Aug 31, 2022 23:59:59").getTime();
  
  let x = setInterval(() => {
    let now = new Date().getTime();
  
    // Tìm thời gian còn lại là hết giờ
    let distance = countDownDate - now;
  
    // Quy đổi thời gian ngày, giờ, phút, giây
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    let timer = document.querySelector(".timer");
    timer.innerHTML = `<div class="day bg-dark text-center rounded">
       <p>${days}</p>
       <p>Ngày</p>
    </div>
    <div class="hour bg-dark text-center rounded">
       <p>${hours}</p>
       <p>Giờ</p>
    </div>
    <div class="minute bg-dark text-center rounded">
       <p>${minutes}</p>
       <p>Phút</p>
    </div>
    <div class="second bg-dark text-center rounded">
        <p>${seconds}</p>
        <p>Giây</p>
    </div>`;
  
    if (distance < 0) {
      clearInterval(x);
      countdownLock.innerHTML = "Hết Thời Gian Khuyến Mại";
    }
  }, 1000);
  
  // Truy cập
  const message = document.querySelector(".message");
  
  const listPromoProducts = document.querySelector(
    "#promo-products .products-slider"
  );
  const promoProducts = allProducts.filter((p) => p.tag == "promo");
  
  const listSellingProducts = document.querySelector(
    "#selling-products .products-slider"
  );
  const sellingProducts = allProducts.filter((p) => p.tag == "bestsell");
  
  const listCartProducts = document.querySelector(".list-cart-products");
  const totalMoneyEl = document.querySelector(".tottal-money .text-danger");
  const addToCart = document.querySelector(".add-to-cart");
  
  // Format tiền VND
  const formatMoney = (number) => {
    return number.toLocaleString("it-IT", { style: "currency", currency: "VND" });
  };
  
  // 3. Hiển thị danh sách sản phẩm KHUYẾN MẠI
  const renderPromoProduct = (arr) => {
    listPromoProducts.innerHTML = "";
  
    // Kiểm tra xem có sản phẩm không
    if (arr.length == 0) {
      alert("Không có sản phẩm");
      return;
    }
  
    // Hiển thị nếu có sản phẩm
    let html = "";
    arr.forEach((p) => {
      html += `
      <div class="col">
         <div class="product">
           <div class="product-item">
            <div class="product-image">
              <div class="image-hover">
              <a href="./main-page/detail.html?id=${p.id}">
               <img
                 src="${p.images[0]}"
                 alt="${p.name}"
               />
               </a>
               <a href="./main-page/detail.html?id=${p.id}">
               <img
                 src="${p.images[1]}"
                 alt="${p.name}"
                 class="img-change"
               />
               </a>
               <div class="add-to-cart">
                 <span><i class="fa-solid fa-cart-plus" onclick = "addProductToCart(${
                   p.id
                 })"></i></span>
               </div>
             </div>
           </div>
           <div class="discount">
             <p>${p.discount}</p>
           </div>
           <div class="product-content text-center">
             <h3>${p.name}</h3>
             <div class="price">
               <p class="discount-price text-decoration-line-through">
               ${formatMoney(p.price)}
               </p>
               <p> ${formatMoney(p.promo_price)}</p>
             </div>
             <a href="./main-page/payment.html"><button class="btn-buy"
             onclick="addProductToCartNow(${p.id})">Mua ngay</button></a>
           </div>
          </div>
         </div>
      </div>`;
    });
  
    listPromoProducts.innerHTML = html;
  };
  
  // 4. Hiển thị danh sách sản phẩm BÁN CHẠY
  const renderSellingProduct = (arr) => {
    listSellingProducts.innerHTML = "";
  
    // Kiểm tra xem có sản phẩm không
    if (arr.length == 0) {
      alert("Không có sản phẩm");
      return;
    }
  
    // Hiển thị nếu có sản phẩm
    let html = "";
    arr.forEach((p) => {
      html += `<div class="col">
         <div class="product">
          <div class="product-item">
           <div class="product-image">
             <div class="image-hover">
             <a href="./main-page/detail.html?id=${p.id}">
               <img
                 src="${p.images[0]}"
                 alt="${p.name}"
               />
               </a>
               <a href="./main-page/detail.html?id=${p.id}">
               <img
                 src="${p.images[1]}"
                 alt="${p.name}"
                 class="img-change"
               />
               </a>
               <div class="add-to-cart">
                 <span><i class="fa-solid fa-cart-plus" onclick = "addProductToCart(${
                   p.id
                 })"></i></span>
               </div>
             </div>
           </div>
           <div class="discount">
             <p>${p.discount}</p>
           </div>
           <div class="product-content text-center">
             <h3>${p.name}</h3>
             <div class="price">
               <p class="discount-price text-decoration-line-through">
               ${formatMoney(p.price)}
               </p>
               <p> ${formatMoney(p.promo_price)}</p>
             </div>
             <a href="./main-page/payment.html"><button class="btn-buy"
             onclick="addProductToCartNow(${p.id})">Mua ngay</button></a>
           </div>
          </div>
        </div>
      </div>`;
    });
  
    listSellingProducts.innerHTML = html;
  };
  
  renderPromoProduct(promoProducts);
  renderSellingProduct(sellingProducts);
  
  // 5. Thêm sản phẩm vào cart
  const addProductToCart = (id) => {
    let product = allProducts.find((p) => p.id == id);
    let item = {
      id: product.id,
      name: product.name,
      promo_price: product.promo_price,
      price: product.price,
      image: product.images[0],
      count: 1,
    };
    addItemToCart(item);
    alert("Thêm vào giỏ hàng thành công");
  };
  
  // 5.1. Thêm sản phẩm mua ngay vào cart
  const addProductToCartNow = (id) => {
    let product = allProducts.find((p) => p.id == id);
    let item = {
      id: product.id,
      name: product.name,
      promo_price: product.promo_price,
      price: product.price,
      image: product.images[0],
      count: 1,
    };
    addItemToCart(item);
  };
  
  // 6. Hiển thị sản phẩm trên giỏ hàng
  // Lấy ra sản phẩm có trong giỏ hàng
  let items = getDataFromLocalStorage();
  
  // Hiển thị danh sách ra ngoài giao diện
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
  
  // 2. Xóa sản phẩm
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
  
  // 3. Thay đổi số lượng
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
  
  // 4. Tính tiền
  // Tính tiền
  const updateTotalMoney = (arr) => {
    // Tính thành tiền
    let totalMoney = 0;
    arr.forEach((p) => (totalMoney += p.count * p.promo_price));
  
    // Cập nhật trên giao diện
    totalMoneyEl.innerText = formatMoney(totalMoney);
  };
  
  // Cập nhật tiền
  updateTotalMoney(items);
  
  // Hiển thị
  renderCartProduct(items);
  