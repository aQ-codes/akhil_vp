/* calculator program which performs operations such as Addition, Subtraction, Multiplication and Division using class*/

class Calculator{
  constructor(a,b){
    this.a = a;
    this.b = b;
  }
  //addition 
  add() {
    return this.a + this.b;
  }
  //subtraction
  sub() {
    return this.a - this.b;
  }
  //multiplication
  mul() {
    return this.a * this.b;
  }
  //division
  div() {
    if (this.b === 0) {
      throw new Error("Division by zero is not allowed!");
    }
    return this.a / this.b;
  }
}

try {
  //take input from command line 
  const [,, aString, bString, operation] = process.argv; //command line args
  const a = Number(aString); //converting string to number
  const b = Number(bString); 
  const op = operation; //operation to be performed

  if (isNaN(a) || isNaN(b)) {
    throw new Error("Inputs must be numbers!");
  }

  const calc = new Calculator(a, b); //creating object of calculator

  let result;

  switch (op?.toLowerCase()) {
    case "add":
      result = calc.add();
      break;
    case "sub":
      result = calc.sub();
      break;
    case "mul":
      result = calc.mul();
      break;
    case "div":
      result = calc.div();
      break;
    default:
      throw new Error("Invalid operation! Use add, sub, mul, or div");
  }

  console.log(`Result: ${result}`);
} catch (err) {
  console.error("Error:", err.message);
}

/*--How to run example--
node Program-1.js 4 5 add
node Program-1.js 4 5 sub
node Program-1.js 4 5 mul
node Program-1.js 16 8 div
*/
