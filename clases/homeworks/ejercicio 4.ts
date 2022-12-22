//tipado inferido
let mati = {
    nombre: 'Matias',
    edad: 29
}

//tipado explicito
interface Persona {
    nombre: string;
    edad: number
}

let franco: Persona = {
    nombre: "Franco",
    edad: 27
}

interface Estudiante extends Persona {
    esActivo: boolean
}

let diego: Estudiante = {
    nombre: "Diego",
    edad: 29,
    esActivo: false //que pasa si comento alguno?
}

// Investiga la palabra reservada implements
/* interface Colection {
    elements: number[];
}

class Numbers implements Colection {
    elements: number[];
}

class Main {
    static each(colection: Colection) {
        for (let i = 0; i < colection.elements.length; i++) {
            console.log(colection.elements[i]);
        }
    }
}
var nums = new Numbers();
nums.elements = [1, 2, 3, 6];
Main.each(nums)
 */

// Existe otra alternativa para realizar lo mismo?
// Si, types.

type Person = {
    name: string,
    age: number
}

type Student = Person & {
    isActive: boolean;
}

let Fede: Student = {
    name: 'Fede',
    age: 29,
    isActive: false
}

//Investiga sus diferencias

export {}