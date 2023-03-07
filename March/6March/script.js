console.log('hello from 6th March!!');

/**
 * Ques 1:  restrict the invocation of cb to at most n times.
            return the last result of cb if called >n times.
            cb function is invoked with this binding.
 */

function limiter(cb, n){

    let count = 0;
    let lastCbResult = null;
    return function(...args){
        count++;
        if(count>n) return lastCbResult;
        lastCbResult = cb.call(this, ...args);
        return lastCbResult;
    }
}


/**
 * Ques 2: Convert the keys of the Object to camel case
 * The object can be arrays/ or Object.
 */

function camelCaseKeysConverter(obj){
    let resultObj = {};
    if(Array.isArray(obj)){
        resultObj = [];
    }
    for(let [key, value] of Object.entries(obj)){
        let [newKey, newValue] = [key, value];
        if((''+key).includes('_')){
            let arr = key.split('_');
            newKey = arr[0]+arr[1].charAt(0).toLocaleUpperCase()+arr[1].slice(1);
        }
        if(newKey.charAt(0) === newKey.charAt(0).toLocaleUpperCase()){
            newKey === newKey.charAt(0).toLocaleLowerCase()+newKey.slice(1);
        }
        if(typeof value === 'object'){
            newValue = camelCaseKeysConverter(value);
        }

        resultObj[newKey] = newValue; 
    }

    return resultObj;
}

// console.log(camelCaseKeysConverter({
//     'foo_bar': true
// }))

// console.log(camelCaseKeysConverter({
//     foo_bar: true,
//     bar_baz: [{ baz_qux: true }, { foo: true }],
//   }))

/**
 * To read further:
 * 1. Read about the cases where there are cyclic references.
 */

/**
 * understanding the usage of Object.hasOwn() && for..in
 */
let p1 = {
    fname: 'Shivi',
    lName: 'Mittal'
}

function findAllTheKeys(obj){
    console.log('the object is::', obj)
    for(let key in obj){
        if(Object.hasOwn(obj, key)){
            console.log(key);
        }
    }
}

// findAllTheKeys(p1);

function Person(fName, lName){
    [this.fName, this.lName] = [fName, lName];
}
Person.prototype.intro = function(){
    console.log(`Hi I am ${this.fName} ${this.lName}`);
}

function Student(fName, lName, subject, yos){
    Person.call(this, fName, lName);
    [this.subject, this.yos] = [subject, yos];
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

let dhruv = new Student('Dhruv', 'Mittal', 'MnC', '2022');
// console.log(dhruv instanceof Student);

// findAllTheKeys(dhruv);
// console.log('constructor' in dhruv);
// console.log(dhruv.intro())


const triangle = { a: 1, b: 2, c: 3 };

function ColoredTriangle() {
  this.color = "red";
}

ColoredTriangle.prototype = triangle;

const obj1 = new ColoredTriangle();

for (const prop in obj1) {
  if (Object.hasOwn(obj1, prop)) {
    // console.log(`obj1.${prop} = ${obj1[prop]}`);
  }
}

/**
 * 
 * 1. Watch DOM Manipulation video -- Frontend Expert
 * 2. Review all the Machine coding Questions from there.
 * 3. CSS Basic review.
 * 4. Question review Great Frontend -- Machine coding.
 * 5. Newer JS syntax and concepts.
 * 6. Async await.
 * 
 */