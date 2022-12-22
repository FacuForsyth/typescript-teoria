//const operations = ["multiply", "add", "divide"];
//crear un propio tipo
type Operation = "multiply" | "add" | "divide";

const calculator = (a: number, b:number, op: Operation): number => {
  /* if(!operations.includes(op)) {
    console.log("This operation is not defined");
  } */
  if(op === "multiply") return a * b;
  if(op === "add") return a + b;
  if(op === "divide") {
    if(b === 0) throw new Error("Can't divide by 0") //return "can't divide by 0" //ERROR
    return a / b;
  }
  throw new Error("Operation is not valid");
}

//EJ: llamado a una API, TYPESCRIPT trabaja de forma estatica, no lo va a chequear. no es en forma de runtime
/* const operation = await fetch("https://calculadora/operacion").then(res => res.json()).then(res => {
  return "copypaste"
}) */

console.log(calculator(1, 3, "add"));
//console.log(calculator(1, "2", "add")); //ERROR , no permite el string del 2 parametro
//console.log(calculator(1, 3, "copypaste")); //ERROR
console.log(calculator(1, 3, "multiply"));
console.log(calculator(10, 2, "divide"));
//console.log(calculator(1, 3, operation)); //ERROR, TS no va a chequear el string que llegue de la api

//PROCESS.ARGV - 
//console.log(process.argv);
