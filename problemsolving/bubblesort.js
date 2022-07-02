function bubbleSort(arr){
    let isSwap;
    for(let i=0;i<arr.length;i++){
        isSwap=false
        for(let j=0;j<arr.length;j++){

            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                isSwap=true

            }
        }
        if(!isSwap) break
    }
    return arr
}
console.log(bubbleSort([2,12,3,4,5,65,333,12,33,332,122]))
