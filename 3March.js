console.log('hello from 3rd March !!');

/**
 * 
 * @param {*} arr 
 * @returns an array with all the unique values in that array.
 * 
 */
function uniqueArray(arr){
   return arr.reduce((acc, curr)=>{
        if(!acc.includes(curr)){
            return [...acc, curr];
        }
        return acc;
    }, []);
}


let arr1 = ['shivi', {
    fname: 'shivi',
    lname: 'Mittal',
}, {
    fname: 'shivi',
    lname: 'Mittal',
}]

let person = {
    fname: 'shivi',
    lname: 'Mittal',
}
let arr2 = [person]

console.log(arr2.includes(person)); // true
console.log(uniqueArray(arr1)); // give the original array, as different objs have different references.


/**
 * Ques
 */

Function.prototype.myBind = function (thisArg, ...boundArgs) {
    // thisArg.f = this;
    // console.log('this outside::', this);
    // return function newFunc(...args){
    //     console.log('this inside::', this);
    //   let allArgs = [...boundArgs, ...args];
    //   return thisArg.f(...allArgs);
    // }
  
    // using arrow function
    return func = (...args) => {
        console.log('this::', this);
      let allArgs = [...boundArgs, ...args];
      thisArg.f = this;
      return thisArg.f(...allArgs);
    }
  };

  const john = {
    age: 42,
    getAge: function () {
      return this.age;
    },
  };

  let getAgeFunc = john.getAge.myBind(john);
  console.log(getAgeFunc());


  /**
   * Question find sum of the form 
   * sum(1)(2)(3)()
   * sum(1)(2)()
   */

 function sum(number) {
    return function(...args){
      if(!args.length) return number;
      let num = args.reduce((acc, curr)=>acc+curr, number);
      return sum(num);
    }
  }


  function isObject(value) {
    if(value == null) return false;
    return value && (typeof value === 'object' || typeof value === 'function');
  }

  console.log('checking if func is object::', isObject(undefined))



/**
 * Question Covered:
 * 1. uniqueArray
 * 2. Filter Array -- Take Care Pointers: (sparse Array, The element val must not be changed by cb func)
 * 3. Map
 * 4. Reduce
 * 5. Function.prototype.bind
 * 6. Implement the function sum (curried version)
 * 
 */








/**
 * Topics to be read:
 * 
 * 1. Object.hasOwn();
 * 2. this keyword & usage while creating prototype methods.
 * 3. Difference between Arrow functions and normal functions.
 */