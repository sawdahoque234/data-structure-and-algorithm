function linearSearch(arr,value){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==value) return i
    }
    return -1
}

console.log(linearSearch([2,4,6,3,6,9,90],90))