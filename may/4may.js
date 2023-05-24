console.log('hello from 4 may');

function* generatorFunc(){
    // yield 42;
    return 42;
}

let gen = generatorFunc();

console.log(gen.next());
console.log(gen.next());

