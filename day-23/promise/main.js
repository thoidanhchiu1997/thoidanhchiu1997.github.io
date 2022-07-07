//Promise: Lời hứa
// Pending:Đang chờ thực hiện

let promise= new Promise((resolve,reject)=>{

})
console.log(promise)
//Thành công
//Lời hứa:Cuối tuần nếu có tiền đi chơi 
//resolve được gọi nếu lời hứa thành công
let hasMoney=true;
let promiseSuccess=new Promise((resolve,reject)=>{
    if(hasMoney==true){
        resolve('Cuối tuần đi chơi')
    }

})
console.log(promiseSuccess)

//Thất bại
//Lời hứa nếu cuối tháng có tiền thì trả nợ
hasMoney=false
let promiseError= new Promise((resolve,reject)=>{
    if(hasMoney==false){
    reject("Không có tiền trả nợ")
 }
})
console.log(promiseError)

// Ví dụ 2 
// Lời hứa 1:Cuối năm nếu có trên 30 triệu thì mua iphone 13 promax
//Lời hứa 2:Sau khi mua Iphone , nếu còn đủ 5tr thì mua Airpod
let money=33;
const buyIphone=()=>{
    return new Promise((resolve,reject)=>{
        if(money>=30){
            resolve("Đủ tiền mua iphone")
        }else{
            reject("Không đủ tiền mua Iphone,cày tiếp thêm thời gian nữa")
        }

    })
}
const buyAirpod=()=>{
    return new Promise((resolve,reject)=>{
        if(money-30>=5){
            resolve("Mua thêm Airpod")
        }else{
            reject("Không đủ tiền mua Airpod")
        }

    })
}
// console.log(buyIphone())
//Hiển thị kết quả 
buyIphone()
      .then(res=>{
        console.log(res);
        //Thực hiện công việc 1 xong -> cv2
        return buyAirpod()
    })
    .then(res=> console.log(res))
      .catch(error =>console.log(error))
      .finally(()=>console.log("về nhà "))