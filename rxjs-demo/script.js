// const {Observable} = require('rxjs'); 

// const wrapArrayIntoObservable = arr => {
//     return new Observable(subscriber =>{
//         for(let item of arr){
//             setTimeout(()=>{
//                 subscriber.next(item);
//             }, item*1000);
            
//         }
//     })
// }

// const data = [1, 2, 3, 4, 5];

// const observable = wrapArrayIntoObservable(data);

// observable.subscribe(val => console.log('Subscriber 1: ' + val));
// observable.subscribe(val => console.log('Subscriber 2: ' + val));

////////////////////////////////////////////////////////////////////////////////////////

// const { timer } = require('rxjs');

// const fastObservable$ = timer(3000, 100)

// const subscription = fastObservable$.subscribe(() => console.log('100ms have passed'))

// setTimeout(() => {
//     subscription.unsubscribe();
//     console.log('10 seconds have passed');
// }, 10000)


const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      resolve("success");
      console.log("timerEnd");
    }, 0);
    console.log(2);
  });
  
  promise.then((res) => {
    console.log(res);
  });
  
  console.log(4);


  /**
   * output:
   * 1
   * 2
   * 4
   * timerStart
   * timerEnd
   * Success
   * 
   * 
   */

  const promise1 = new Promise((resolve, reject) => {
    console.log(1);
    resolve('success')
  });
  
  promise1.then(() => {
    console.log(3);
  });
  
  console.log(4);

  /**
   * 1
   * 4
   * 3
   */