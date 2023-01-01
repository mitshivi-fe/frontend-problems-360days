

/**Thought & simplification: 
 * Implement a function 'once' that takes a cb function and return a function that calls the passed-in function just once 
 * and at other times it returns 
 * simply the result of the first call. */

function once(func){
    let isCalled = false;
    let result = null;
    return function(...args){
        if(!isCalled){
            result = func.call(this, ...args);
            isCalled = true;
        } 
        return result;
    }
}

let i = 1;

function incrementBy(value) {
  i += value;
  return i;
}

const incrementByOnce = once(incrementBy);
incrementByOnce(2); // i is now 3; The function returns 3.
incrementByOnce(3); // i is still 3; The function returns the result of the first invocation, which is 3.
i = 4;
incrementByOnce(2);


/**
 * learning:
 * 1. Closures
 * 2. Call, apply, bind
 * 3. 'this' keyword
 */