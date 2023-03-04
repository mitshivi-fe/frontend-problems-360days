//The onload event is described in the article Resource loading: onload and onerror, it basically executes a function after the script is loaded and executed.
script.onload = () => callback(script); 

// Note - error first call back style
loadScript('/my/script.js', function (error, script) {
    if (error) { // handle error
    } else { // script loaded successfully
    }
})

/**
 * Problems:
 * 1. Pyramid of Doom
 * 2. Namespace cluttering (avoids pyramid of doom, but creates many non-reusable functions.)
 */

// syntax for Promise
/**
 * Here resolve & reject cb's accepts just one argument and ignore additional ones.
 */
let promise = new Promise((resolve, reject)=>{
    
})

/**
 * Promise Object Internal Properties:
 * 1. States -- [pending, fulfilled, rejected]
 * 2. result -- [undefined, value, error]
 * 
 * A promise when resolved, or rejected is called 'Settled', whereas in the starting state it was pending.
 */


/**
 * Promise obj can be registered/subscribed using the following methods:
 * 1. then --> then((resCb, errCb)) // return a new Promise.
 * 2. Catch
 * 3. finally --> {
 *     (i) Always runs when the Promise is settled (fulfilled or rejected),
 *     (ii) It does general clean up,
 *     (iii) doesn't take any argumnet, 
 *     (iv) doesn't return anything,
 *     (v) passes on the promise result further,
 *     (vi) cannot tell if the promise fulfilled or rejected.
 *     (vii) It can be placed before or after then & catch block, best position - to be placed at last of chaining.
 *     (viii) If a finally handler returns something, it’s ignored.
 *      (ix) When finally throws an error, then the execution goes to the nearest error handler.
 * }
 */
promise.then(res=>console.log(res), err=> {throw new Error(err)}).catch(err=>console.log(err));

function delay(ms) {
    return new Promise((res, rej)=>{
        setTimeout(res, ms);
    })
}
  
  delay(3000).then(() => alert('runs after 3 seconds'));

  // promisification of showcircle function.
function showCirle(...args){
    return new Promise(res=>{
        let div = document.createElement('div');
        res(div);
    })
}

showCirle(2,3,4).then(div=>{
    // some action
})


// Chapter 3: Promises Chaining


// Handling rejections / errors:
// Here the error is handled in the console by the window object.
window.addEventListener('unhandledrejection', function(event) {
    // the event object has two special properties:
    alert(event.promise); // [object Promise] - the promise that generated the error
    alert(event.reason); // Error: Whoops! - the unhandled error object
  });
  
  new Promise(function() {
    throw new Error("Whoops!");
  }); // no catch to handle the error

/**
 * Learning Promise API's
 */

/**
 * 1. Promise.All()
 * If any of the Api's / Promises in the array given to the Promise.All() fails
 * then the Promise.all() gets rejected, and the Promise.all() stops watching the result of the Promise,
 * But, it does nothing to stop the API calls, that can be stopped by the usage of AbortController
 * 
 * 2. there’s no concept of “cancellation” in promises
 */