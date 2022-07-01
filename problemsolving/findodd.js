function findOdd(arr){
    let result=[]
 function helper(input){
    if(input.length==0) return 0
    if(input[0]%2 !== 0){
        result.push(input[0])
    }
    helper( input.slice(1))
 }
 helper(arr)
 return result;
//  return result.length; total koita
}
console.log(findOdd([9,2,3,42,55,4,8,90]))
