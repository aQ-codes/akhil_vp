try{
  //input from command line
  const input = process.argv[2];

  if (!input) {
          throw new Error("Please provide an integer input!");
      }

  const a = parseInt(input);

  if (isNaN(a) || a <= 0) {
        throw new Error("Input must be a positive integer!");
    }
  
  // Generate series of odd numbers
  let result = [];
  for (let i = 1; i <= a; i++) {
      result.push((2 * i) - 1); // formula for nth odd number 2n-1
  }

  console.log(result.join(", "));//converting list to string 
}
catch(error){
  console.log("Error:", error.message); 
}

/*--Example run--
node Problem-2.js 7
*/