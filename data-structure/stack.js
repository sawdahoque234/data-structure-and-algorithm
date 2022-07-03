class DataStructure{
    constructor(){
        this.arr=[]
    }

    push(value){
        this.arr.push(value)
        return this.arr;
    }
    pop(){
        this.arr.pop()
        return this.arr;
    }
    lookUp(){
        return this.arr[this.arr.length-1]
    }
}
let stack=new DataStructure()
console.log(stack.push(3))
console.log(stack.push(4))
console.log(stack.push(1))
console.log(stack.push(6))
console.log(stack.push(32))
console.log(stack.pop())
console.log(stack.lookUp())