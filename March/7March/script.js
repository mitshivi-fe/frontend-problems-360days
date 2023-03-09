function addTwo(a, b) {
    return a + b;
  }


  function curry(cb){
    const lengthOfParams = cb.length;
    if(!lengthOfParams){
        return cb.bind(this);
    }
    return function inner(...args){
        if(lengthOfParams === args.length){
           return cb.call(this, ...args);
        }
        return inner.bind(this, ...args);
    }
  }

  /**
   * Concepts Involved :
   * 1. Currying
   * 2. Closures
   * 3. this
   * 4. call, apply, bind
   * 5. knowing basics of js
   */


  /// Exampl1
  const curriedAddTwo = curry(addTwo);
  let val1 = curriedAddTwo(3)(4); // 7
  console.log(val1);
  
  const alreadyAddedThree = curriedAddTwo(3);
  alreadyAddedThree(4); // 7


  /// Example 2
  function multiplyThree(a, b, c) {
    return a * b * c;
  }
  
  const curriedMultiplyThree = curry(multiplyThree);
  let val2 = curriedMultiplyThree(4)(5)(6); // 120
  console.log(val2);
  
  const containsFour = curriedMultiplyThree(4);
  const containsFourMulFive = containsFour(5);
  let val3 = containsFourMulFive(6); // 120
  console.log(val3);































