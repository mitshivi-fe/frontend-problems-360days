console.log('Maching coding Table generator...');

const form = document.getElementById('myForm');
let rows, cols;
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let formData = new FormData(form);
     [rows, cols] = [formData.get('rows'), formData.get('cols')];
     console.log(rows, cols);
});

function createTable(){
    const table = document.createElement('table');
    
}