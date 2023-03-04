console.log('learning about Promises in Depth');

// Custom Promise.all function
/**
 * @param {Array} arr
 * @return {Promise<Array>}
 */
function promiseAll(arr) {
    return new Promise((resolve, reject) => {
        if (! arr.length) 
            return resolve([]);
        
        let result = [];
        arr.forEach((promise, i) => {
            if (typeof promise === 'object' && typeof promise.then === 'function') {
                promise.then(res => {
                    result[i] = res;
                    if (result.length === arr.length && !result.includes(undefined)) {
                        resolve(result)
                    };
                }).catch(err => {
                    reject(err);
                })
            } else {
                result[i] = promise;
                if (result.length === arr.length) {
                    if(!result.includes(undefined)) resolve(result)
                }
            }
        })
    })
}

/**
 * Notes -- This function of PromiseAll can be solved better with the usage of async/await.... But this makes the program stop till the response arrives, not a good solution.
 * with that we won't need that else block to check if each element in the array is thenable or not
 * 
 * Also, if we keep a track of resolvedPromises/values using some variable then we won't be
 * needing to go forth with the case of checking the sparse arrays/ or the array with empty values.
 */

// const p0 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 10);
//   });
//   const p1 = Promise.resolve(3);
//   const p2 = 4;

// const p0 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(1);
//     }, 200);
//   });
//   const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(2);
//     }, 100);
//   });
//   const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(3);
//     }, 10);
//   });


// let newPr = promiseAll([p0, p1, p2]);
// newPr.then(res=>{
//     console.log('the new Arr::', res);
//     res.forEach(val=>{
//         console.log('hi', val);
//     })
// });


// let arr = [];
// console.log('initial length::', arr.length);
// arr[5] = 5;
// console.log('new length::', arr.length);


/**
 * Implementing Promise.allSettled()
 * {
 * status: 'fulfilled', value: result
 * }
 * 
 * or {
 * status: 'rejected', reason: error
 * }
 */


function promiseAllSettled(arr){
    if(!arr.length) return [];
    let result = [];
    let unresolved = arr.length;
    return new Promise((resolve)=>{
        arr.forEach((promise, i)=>{
            Promise.resolve(promise).then(res=>{
                    result[i] = {
                        status: 'fulfilled',
                        value: res
                    }
                    unresolved --;
                if(unresolved === 0) return resolve(result);
            }).catch(err=>{
                result[i] = {
                    status: 'rejected',
                    reason: err
                }
                unresolved --;
                if(unresolved === 0) return resolve(result);
            })
        })
    })
}

/**
 * This can be further optimised by the use finally.
 */


/**
 * Question -- Implement Promise.race() // returns the first fulfilled array or return with the rejected one.
 * Empty array return forever pending Promise.
 */

function promiseRace(arr){
    return new Promise((resolve, reject)=>{
        arr.forEach((promise)=>{
            Promise.resolve(promise).then(res=>resolve(res), err=>reject(err)).catch(err=>reject(err));
        })
    })
}

/**
 * Question -- Implement Promise.any -- returns any first resolved Promise, else
 * if all the promises are rejected then it return the aggregator of all the errors.
 */

function promiseAny(arr){
    return new Promise((resolve, reject)=>{
        if(!arr.length) reject(new AggregateError([]));
        let errors = [];
        let pending = arr.length;
        arr.forEach((promise, index)=>{
            Promise.resolve(promise).then(res=>{
                resolve(res)
            }).catch(err=>{
                errors[index] = err;
                pending--;
                if(pending===0){
                    reject(AggregateError(errors));
                }
            })
        })
    })
}


/**
 * A good use case of Promise.resolve:
 * For example, the loadCached function below fetches a URL and remembers (caches) its content.
 * For future calls with the same URL it immediately gets the previous content from cache, but uses
 *  Promise.resolve to make a promise of it, so the returned value is always a promise:
 */
let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // (*)
  }

  return fetch(url)
    .then(response => response.text())
    .then(text => {
      cache.set(url,text);
      return text;
    });
}


/**
 * Promisification -- It’s the conversion of a function that accepts a callback into a function that returns a promise.
 */