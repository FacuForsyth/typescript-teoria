const multiplicator = (a: number, b: number, printText: string) => {
    console.log(printText, a * b);    
}

//PROCESS.ARGV - node.js - le pasamos los parametros por node, en la consola
// npm run multiplier 3 4
//console.log(process.argv); //es un arreglo - donde la posicion 2 y 3 son los argumentos que le paso por consola

const parseArguments = (args): Array<number> => {
    if (args.length != 4) throw new Error ("Wrong number of arguments")
    
    const firstNum = Number(args[2])
    const secondNum = Number(args[3])
    if (!isNaN(firstNum) && !isNaN(secondNum)) {
        return [
            firstNum,
            secondNum
        ]
    }
    throw new Error("Provied values were not numbers!")
}

const cleanArguments = parseArguments(process.argv);

//const a: number = Number(process.argv[2]) //es un string, lo pasamos a numero
const a: number = Number(cleanArguments[0]) 
const b: number = Number(cleanArguments[1])

multiplicator(a, b, `Multiplied ${a} and ${b} and the result is:`)