//total count of number listed in the dictionary which is multiple of 1 to 9

function countMultiples(arr) {
    const result = {};
    for (let i = 1; i <= 9; i++) {
        result[i] = arr.filter(num => num % i === 0).length; //assigns the length of filered array to each i 
    }
    return result;
}

try {
    //  input array
    const arr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];

    // Call function and print result
    const multiplesCount = countMultiples(arr);
    console.log(multiplesCount);

} catch (err) {
    console.error("Error:", err.message);
}

