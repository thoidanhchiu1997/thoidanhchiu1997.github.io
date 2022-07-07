// Lời hứa 1:Cuối năm nếu có trên 30 triệu thì mua iphone 13 promax
//Lời hứa 2:Sau khi mua Iphone , nếu còn đủ 5tr thì mua Airpod

let money=50;
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
// Cách 1:Regular function
// async function demo (){}

// cách 2: Function expresstion 
// const demo =async function(){}
const buy=async()=>{
    try{
        let res=await buyIphone();
    console.log(res);
    let res1=await buyAirpod()
    console.log(res1)
    }catch(error){
        console.log(error)
    }
    return"Về nhà";

}
buy()
const data=buy()
console.log(data)

data.then(res=> console.log(res))