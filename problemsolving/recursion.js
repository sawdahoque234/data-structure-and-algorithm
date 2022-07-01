function countDown(n){
    console.log(n)
    n--
    if(n>0){
        countDown(n)
    }
}
// countDown(10)

function sum(n){
let sum=0
for(let i=n;i>=0;i--){
    sum += i
}
return sum
}
// console.log(sum(10))

function sum1(n){
    if(n<0) return 0
    return n + sum1(n-1)
}
// console.log(sum1(110))
//array
function sum2(arr){
    if(arr.length === 0) return 0

    let rest=arr.slice(1)
    return arr[0]+ sum2(rest)
}
console.log(sum2([3,2,4]))
// time c o(n^2)
//space o(n)

function sum3(arr){
    return helperFun(arr,0)
}
function helperFun(arr,index){
    if(arr.length === index) return 0
    return arr[index]+helperFun(arr,index+1)
}
console.log(sum3([3,2,14]))
