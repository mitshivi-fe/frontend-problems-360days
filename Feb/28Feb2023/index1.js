// this doc contains all the practice questions for Array.reduce method
console.log('welcome to practicing questions on reduce method');

let strConcat = [1,2,3].reduce((acc, curr)=>acc+curr, '');
console.log(strConcat, typeof strConcat);

let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(voters.reduce((acc, curr)=>curr.voted? ++acc : acc, 0));

let arr = [1,2,[2,3,[5,6,[8,900]], [59]]] // [1,2,2,3,5,6,8,900,59]


function flatten(arr){
    let brr = arr.reduce((acc, curr)=>{
        if(typeof curr !== 'number'){
            return [...acc, ...flatten(curr)];
        }else{
            return [...acc, curr];
        }
    }, []);
    return brr;
}

console.log(flatten(arr));


let initialResultObj = {
    numYoungVotes: 0,
    numYoungPeople: 0, // 18-25
    numMidVotesPeople: 0,
    numMidsPeople: 0, // 26-35
    numOldVotesPeople: 0,
    numOldPeople: 0 // rest
}

let resultVoterObj = voters.reduce((acc, curr)=>{
    if(curr.age>=18 && curr.age<=25) {
        ++acc.numYoungPeople;
    }else if(curr.age>=26 && curr.age<=35){
        ++acc.numMidsPeople;
    }else{
        ++acc.numOldPeople;
    }

    if(curr.voted){
        if(curr.age>=18 && curr.age<=25) {
            ++acc.numYoungVotes;
        }else if(curr.age>=26 && curr.age<=35){
            ++acc.numMidVotesPeople;
        }else{
            ++acc.numOldVotesPeople;
        }  
    }
    return acc;
}, initialResultObj)

console.log(resultVoterObj);
