console.log('starting 2nd March, 2023');

/**
 * Ques: Implement JSON.stringify(), you may ignore the second and the third optional parameters in the original API
 */

let cmap = new Map();
let func = function(){
    console.log('Hello world!');
}
let cset = new Set();
// console.log(cmap instanceof Function);
console.log(typeof(func)==='function');
console.log(cset instanceof Set);
console.log(typeof(Symbol('Hello')));
console.log(typeof({}));
console.log([] instanceof Array);
console.log(`"hi"`);
console.log(typeof('hey'));
let name = 'shivi';
console.log(`"${name}"`); // "shivi"

function customJsonStringifyFunc(obj){
    if(obj === null || obj === 0) return obj+'';
    if(obj === undefined || typeof(obj)==='function' || typeof(obj) === 'symbol' ) return undefined;
    if(obj instanceof Set || obj instanceof Map) return `{}`;
    if(typeof(obj)=== 'number' && (isNaN(obj) || obj === Infinity || obj === -Infinity)){
        return 'null';
    }
    if(typeof(obj) !== 'object') return obj+'';
    if(typeof(obj) === 'string') return `"${obj}"`;

    // nested objects && Arrays

    if(obj instanceof Array){
        return '['+transformArrayForJsonStringify(obj)+']';
    }

   // ['i', 'shivi'] --> '["i", "shivi"]'

//    '{"str": "str"}', "str": "str"

let ex = {"str1": "str", "str2": "str", "str3": "str", "str4": "str"} 


//  [[key, value], [key, value]]



    return '{'+transformObjForJsonStringify(obj)+'}'; 
   

}

function transformArrayForJsonStringify(arr){

    return arr.map(ele=>{
        let transformedEle = customJsonStringifyFunc(ele);
        return `"${transformedEle}"`;
    })

}

function transformObjForJsonStringify(obj){
    let newObj = {};
    for(let [key, value] of Object.entries(obj)){
        let modifiedKey = `"${key}"`;
        let modifiedVal = customJsonStringifyFunc(value);
        newObj[modifiedKey] = `"${modifiedVal}"`;
    }

    return Object.entries(newObj).map(([key, value]) => {
        return `${key}:${value}`;
    })

}

let objA = {
    name: 'foo',
    age: 18,
    attr: ['coding', 123],
  }

//   console.log(customJsonStringifyFunc(objA));

  let objB = ['hi', 'i', 'love', 'you']; // '["hi", "i", "love", "you"]'
  let objc = 'Dhruv';
//   console.log(customJsonStringifyFunc(objc));
//   console.log(customJsonStringifyFunc(objB));

  console.log('stringified array::', customJsonStringifyFunc(objB), typeof(customJsonStringifyFunc(objB)));
  console.log('actual::', JSON.stringify(objB), typeof(JSON.stringify(objB)));

  let objD = {
    name: 'Shivi',
    age: 26,
    address: {
        'city': 'Panipat',
        "state": 'Haryana',
        country: 'India',
        pincode: 132103
    },
    'friends': ['Rahul', "Dhruv", "CID", 'Mayank'],
  }

  console.log('actual result:::', JSON.stringify(objD));
  console.log('our result::', customJsonStringifyFunc(objD));


  console.log(Object.entries(objD));

  let str = '{"name":"Shivi","age":26,"address": {"city":"Panipat","state":"Haryana","country":"India","pincode":132103},"friends":["Rahul","Dhruv","CID","Mayank"]}'