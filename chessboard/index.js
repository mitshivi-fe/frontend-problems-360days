console.log('19 March 2023');

const chessboardWrapper = document.querySelector('#chessboard');

function init(){
    // 8*8 
    let fragment = document.createDocumentFragment();
    for(let i=1;i<=8; i++){ // rows
        let row = document.createElement('div');
        row.classList.add('row');
        for(let j=1;j<=8;j++){ // columns
            let block = document.createElement('div');
            block.classList.add('block');
            if((j+i)%2===0){
                block.classList.add('black');
            }
            block.classList.add('white');
            row.append(block);
        }
        fragment.append(row);
    }
    chessboardWrapper.append(fragment);
}
init();