console.log('hello from march 9');

// ques to be done https://www.greatfrontend.com/questions/javascript/squash-object


// find better ways to solve this problem.
                              
function squashObject(obj){
    let result = {};

    for(let [key, value] of Object.entries(obj)){
        let modifiedkey = ''+key; 
        if(value == null || typeof value !== 'object'){
            result[modifiedkey] = value;
        }else{
            let parentKey = `${modifiedkey}`; 
            let squashedVal = squashObject(value);
            for(let [k, v] of Object.entries(squashedVal)){
                let newKey = (k.length)? `${parentKey}.${k}`: parentKey;
                if(parentKey === ''){
                    result[k] = v
                }else
                result[newKey] = v;
            }
        }
    }
    return result;
}




// const object = {
//     a: { b: null, c: undefined },
//   };

// const object = {
//     a: 5,
//     b: 6,
//     c: {
//       f: 9,
//       g: {
//         m: 17,
//         n: 3,
//       },
//     },
//   };

// const object = { a: { b: [1, 2, 3], c: ['foo'] } };
const object = {
    foo: {
      '': {
        '': 1,
        bar: 2,
      },
      a: 1,
    },
  }

  let obj2 = {
    foo: 1,
    'foo.bar': 2,
    'foo.a': 1,
  }

let newObj = squashObject(object);
console.log(newObj);


let res = {
    a: 5,
    b: 6,

}