import "../css/index.css"
import "../css/header.css"
import "../css/footer.css"
import "../css/category.css"
import "../css/pay.css"
import "../css/home.css"

// API lấy danh sách các tỉnh (province)
// GET : https://provinces.open-api.vn/api/p/

// Lấy danh sách quận huyện (district)
// GET : https://provinces.open-api.vn/api/p/${provinceCode}?depth=2

// Lấy danh sách xã phường
// GET : https://provinces.open-api.vn/api/d/${districtCode}?depth=2

const provinceEl = document.querySelector(".province")
const districtEl = document.querySelector(".district")
const communeEL = document.querySelector(".commune")

async function getProvince() {
    try {
        // gọi API lấy danh sách tỉnh thành phố
        let res = await axios.get("https://provinces.open-api.vn/api/p/")
        console.log(res.data);
        // render tỉnh thành phố

        renderProvince(res.data)
    } catch (err) {
        console.log(err);
    }
}

// hiển thị danh sách tỉnh thành phố
function renderProvince(arr) {
    arr.forEach(Element => {
        provinceEl.innerHTML += `<option value="${Element.code}">${Element.name}</option>`
    });
}

provinceEl.addEventListener("change", async function () {
    try {
        // lấy ra code của tỉnh thành phố
        let provinceCode = provinceEl.value
        // let provinceCode = event.target.value  // cách 2
        console.log(provinceCode);
        // gọi API để lấy danh sách quận huyện tương ứng với provinceCode
        let res1 = await axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
        console.log(res1);
        // render quận huyện tương ứng với responce trả về

        renderDistrict(res1.data.districts)
    } catch (err) {
        console.log(err);
    }
})
function renderDistrict(arr) {
    districtEl.innerHTML = `<option>---Chọn quận/huyện---</option>`
    for (let i = 0; i < arr.length; i++) {
        districtEl.innerHTML += `
        <option value="${arr[i].code}">${arr[i].name}</option>`

    }
}

districtEl.addEventListener("change", async function () {
    try {
        // lấy ra code của tỉnh thành phố
        let districtCode = districtEl.value
        // let provinceCode = event.target.value  // cách 2
        console.log(districtCode);
        // gọi API để lấy danh sách quận huyện tương ứng với provinceCode
        let res2 = await axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
        console.log(res2);
        // render quận huyện tương ứng với responce trả về

        renderCommune(res2.data.wards)
    } catch (err) {
        console.log(err);
    }
})
function renderCommune(arr) {
    communeEL.innerHTML = `<option>---Chọn xã/phường---</option>`
    for (let i = 0; i < arr.length; i++) {
        communeEL.innerHTML += `
        <option value="${arr[i].code}">${arr[i].name}</option>`

    }
}

getProvince()






// Các mã giảm giá
let promotionCode = {
    HE2022: 10,
    BLACK: 20,
    XINCHAO: 30,
    SPECIAL: 40,
}

let btnPromotion = document.getElementById("basic-addon2")
let discountEl = document.querySelector(".discount-price")
let totalEl = document.querySelector(".total-money")


//convert tiền
function convertMoney(number) {
    return number.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

}

function updateTotalMoney() {
    let totalMoney = 0
    let discountMoney = 0
    let data = check()
    if (data) {
        discountMoney = (9100000 * data )/100
    }

    discountEl.innerHTML = convertMoney(discountMoney)
    totalEl.innerHTML = convertMoney(9100000 - discountMoney)
}

const inputPromotionCode = document.querySelector(".promotion")
function check() {
    let value = inputPromotionCode.value
    if(promotionCode[value]) {
        return promotionCode[value]
    }
    return 0;
}
btnPromotion.addEventListener("click", function() {
    updateTotalMoney()
})



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()