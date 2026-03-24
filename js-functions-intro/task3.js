
function checkOrder (available, ordered) {
    switch (true) {
        case ordered == 0:
            return "Your order is empty";
        case ordered <= available:
            return "Your order is accepted";
         case ordered > available:
            return "Your order is too large, we don’t have enough goods";
    } 
}

console.log (checkOrder(1,1))
console.log (checkOrder(1,0))
console.log (checkOrder(1,2))