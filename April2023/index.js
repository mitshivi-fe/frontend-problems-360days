// let p = new Promise((resolve, reject)=>{
//     resolve('Oh great, I will be fulfilled');
// })

// p.then(res=> console.log(res));


// setTimeout(()=>{
//     p.then(res=>{
//         console.log(`2:: ${res}`);
//     })
// }, 2000);

let newObj = {
    1: '1',
    name: 'Shivi',
    true: true
};

for(let [key, value] of Object.entries(newObj)){
    console.log(key, typeof key);
    console.log(value, typeof value);
}