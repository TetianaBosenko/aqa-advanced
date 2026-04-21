function printText(text, ms) {
  setTimeout (() => {
    console.log(text);
  }, ms)
}

printText('Login with existing customer account', 5000);