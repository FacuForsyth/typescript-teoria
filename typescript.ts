//Typescript es un "superset"(superconjunto) de JS. todo el codigo de JS es compatible con TS.
//Proporcionarle TIPOS a JS , xq JS es un lenguaje de programacion que tiene tipado debil y dinamico
//debil: 
let mensaje = "hola mundo"
typeof mensaje //string
//puede ser el tipo que quiera 
//dinamico: 
mensaje = 2 //en TS no se puede. ERROR. por que ya detecta que fue un string
typeof mensaje //number
//puede ir cambiando el tipo

//INICIAR UN PROYECTO
/* 
npm init -y
npm install --save-dev ts-node typescript
*/