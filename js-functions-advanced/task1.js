function handleNum(number, handleEven, handleOdd) {
    if (number % 2 == 0) {
        handleEven();
    } else {
        handleOdd();
    }
}

function myHandleEven() {
    console.log('number is even');
}

function myHandleOdd() {
    console.log('number is odd');
}

handleNum(128, myHandleEven, myHandleOdd);
