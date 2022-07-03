class AnotherDataStructure{
    constructor(){
        this.database={};
        this.count=0;
    }

    push(value){
        this.count++;
        this.database[this.count]=value
        return this.database;
    }
}

let stack1=new AnotherDataStructure()
console.log(stack1)
console.log(stack1.push(10))
console.log(stack1.push(10))
console.log(stack1.push(10))
