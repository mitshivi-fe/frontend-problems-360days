const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
}

// Implement a cart feature:
/**
 * 1. Add items to cart
 * 2. Add 3% tax to item in cart
 * 3. Buy Item: Cart ---> purchases
 * 4. Empty Cart
 */

function addItemsToCart(user, item){
    if(item){
        user.cart.push(item);
        return true;
    }

    return false;
}

// let dummyItem = {
//     title: 'dummy',
//     price: 123
// }


function addTax(user, item){
    if(user && item){
        // find the item in cart
        let indexOfItem = user.cart.findIndex(ele => ele.title === item.title);
        if(indexOfItem> -1){
            let price = user.cart[indexOfItem].price;
            price+=Math.ceil((13*price)/100);
            user.cart[indexOfItem].price = price; 
            return true;
        }
        return false;
    }
}

function buyItem(user, item){
    if(user && item){
        const indexOfItem = user.cart.findIndex(ele=> ele.title === item.title);
        if(indexOfItem>-1){
            let itemToPurchase = user.cart.splice(indexOfItem, 1);
            user.purchases.push(itemToPurchase);
            return true; 
        }

        return false;
    }
}

function emptyCart(user){
    user.cart = [];
    return true;
}


function shopping(){

}

// indempotent


// const curriedMul = (a) => (b) => a*b;
// console.log(curriedMul(3)(4))


// function consoleInput(num){
//     console.log(num);
// }

function yunhi(a, b, c, d){
return a+b+c+d;
}

console.log(yunhi.length);
