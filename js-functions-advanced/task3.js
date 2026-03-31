function divide (numerator,denominator) {
     if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error ('Numerator or Denominator is not a number')
     } else if (denominator === 0) {
        throw new Error ('Denominator should not be 0')
     } else {
        let result = numerator / denominator
        return result
     }
}

try {
    let result = divide(12,2)
    console.log(result)
} catch (error) {
    console.log(error.message)
} finally {
    console.log("Work Done")
}

try {
    let result = divide(6,0)
    console.log(result)
} catch (error) {
    console.log(error.message)
} finally {
    console.log("Work Done")
}

try {
    let result = divide(10,'test')
    console.log(result)
} catch (error) {
    console.log(error.message)
} finally {
    console.log("Work Done")
}

try {
    let result = divide('test',4)
    console.log(result)
} catch (error) {
    console.log(error.message)
} finally {
    console.log("Work Done")
}


