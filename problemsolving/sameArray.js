function samearray(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0;i< arr1.lenght;i++){
        let currentIndex=arr2.indexOf(arr1[i]**2)
        if(currentIndex === -1){
            return false
        }
        arr2.splice(currentIndex,1)
    }
    return true
}
//time complexity  o(n^2)

console.log(samearray([2,3,6],[4,9,36]))
