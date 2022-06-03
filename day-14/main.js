


function getElementGreater(arr,b){
    let newArr=[]
    for(i=0;i<=arr.length;i++){
        
    if(arr[i]>b){
        newArr.push(arr[i]);
    }
}
return(newArr)
    }

console.log( getElementGreater([1,2,3,4,5],3))



function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }
   console.log(getRandomColor())
   
   
  
function randomRgbCode() {
  let r= Math.floor((Math.random())*(256));
  let g= Math.floor((Math.random())*(256));
  let b= Math.floor((Math.random())*(256));
  return `rgb(${r},${g},${b})`
    }


console.log(randomRgbCode())





