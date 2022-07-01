let temparature=[33,2,1,44,3,5,'error',89,90,-43]

function getHigherAndLower(arr){
let higher=arr[0]
let lower=arr[0]
for(let i=0;i<arr.length;i++){

    if(typeof arr[i] !== 'number') continue

    if(higher<arr[i]){
        higher=arr[i]
    }
    
    if(lower > arr[i]){
        lower=arr[i]
    }
}
console.log(higher,lower)
return higher - lower
}
console.log(getHigherAndLower(temparature))