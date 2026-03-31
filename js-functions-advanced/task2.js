function myFunction (num) {
    console.log(num);
    if (num <= 0){
        return 0;
    } else {
        return myFunction(num - 1);
    }
}

myFunction(5);
