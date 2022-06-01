// b1
let str= 'i love you'
sub=' you'

function checkStringExist(str,sub ){
    let check = str.indexOf(sub)
    if(check==-1){return false}else{return true}
}
console.log(checkStringExist('i love you','you'));
console.log(checkStringExist('i love you','hate'));
// b2
var s3='xin '

function chuoi1(s3){
    if(s3.length<=8){console.log(s3=s3+"...") }
    else if(s3.length>8)
        {console.log (s3=s3.slice(0,8))}
   
}
chuoi1(s3)
// b3

function kiemTraChuoi(str){
    
    str = str.toLowerCase().replaceAll(' ','_')    
   
    return str === str.split('').reverse().join('')  
  }
 console.log(kiemTraChuoi('anna   '))
 console.log(kiemTraChuoi('tech mater'))

// b5
 function convertSnakecase(key) {
    key= key.toLowerCase().replaceAll(" ","_")
    return key
 }
 
 console.log(convertSnakecase('HELLO world'));
 console.log(convertSnakecase('XIN CHAO CAC BAN'));

//  b4










