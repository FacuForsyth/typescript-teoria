function sumaConc(a: number, b: number): number | string {
    return "El resultado es:" + a + b 
}
// Logra que esta funcion tambien concatene strings
function sumaConcat(a: number | string, b: number | string): number | string {
    if(typeof a === "string") a = parseInt(a);
    if(typeof b === "string") b = parseInt(b);  
    return `El resultado es: ${a + b}`
};