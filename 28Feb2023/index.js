// Implement Array.map

Array.prototype.newMap = function(cb){
    let result = [];
    for(let i=0;i<this.length;i++){
        if(this.indexOf(this[i])>-1){
            result[i] =  cb(this[i], i, this);
        }
       
    }
    return result;
}


let arr = [1,2,3,4];
brr = arr.map(ele=>ele*2);
// console.log(brr);

crr = arr.newMap(ele=>ele*2);
// console.log(crr);


// Implement Array.filter

let drr = arr.filter(ele=>ele%2==0); //[2,4]
// console.log(drr);

Array.prototype.newFilter = function(cb){
    let result = [];
    for(let i=0; i<this.length; i++){
       if(cb(this[i], i, this)){
        result.push(this[i]);
       }
    }
    return result;
}

let err = arr.newFilter(ele=>ele%2!=0);
// console.log(err);

// Implement Array.reduce

let frr = arr.reduce((acc, curr)=>acc+curr, 10);
// console.log(frr);

Array.prototype.newReduce = function customReduce(cb, initialVal){
    let result;
    let index = 0;
    let accumulator = initialVal || null;
    if(initialVal == null) {
        initialVal = this[0];
        index++;
        accumulator = initialVal;
    }
    for(;index<this.length;index++){
        result = cb(accumulator, this[index]);
        accumulator = result;
    }

    return result;

}



let grr = arr.newReduce((ele, pre)=>ele+pre, 0);
console.log(grr);

let employees = [
    {
        "id": 11,
        "name":"Abhinav",
        "salary":75000
    },
    {
        "id": 2131,
        "name":"Gaurav",
        "salary":62000
    },
    {
        "id": 3012,
        "name":"Raj",
        "salary":32000
    },
    {
        'id': 1000,
        'name': 'Dhruv',
        'salary': 100000
    }
]

let totalSalary = employees.newReduce((acc, emp)=>{
    return (emp.salary + acc)
},0)
// console.log(totalSalary);

// now find whose salary is the highest

let highestSalaryEmp = employees.newReduce((acc, emp)=>{
   return acc.salary>emp.salary? acc : emp;
}, employees[0])

// console.log(highestSalaryEmp);

// for more practice questions on reduce method refer the index1.js file










// Concepts to look at:

/**
 * 1. This keyword
 * 2. call, apply, bind
 * 3. prototype
 */


