class Person {
    //con protected accede desde la clase hija
    protected name: string;
    protected age: number;
    private mail: string;
    constructor(name: string, age: number, mail: string) {
      this.name = name;
      this.age = age;
      this.mail = mail;
    }
  }
  let facu = new Person("facu", 30, "facu@mail.com");
  //facu.name //NO, no puedo acceder a name por que esta protejido!
  //facu.mail //NO, no puedo acceder a mail por que es privada dentro de la clase Person

  class Student extends Person {
    //con private solo puedo acceder dentro de la clase
    private regular: boolean;
    
    constructor(name: string, age: number, mail: string, regular: boolean) {
      super(name, age, mail);
      this.regular = regular;
    }
    //creo la funcion para poder acceder a los valores
    getFullInfo() {
      return `${this.name} (${this.age} years old) - ${this.regular ? 'regular' : 'not regular'}`;
    }
  }
  
  const student = new Student("Franco", 26, "franco@mail.com", true);
  
  student.getFullInfo(); // "Franco (26 years old) - not regular"
  //student.name; //NO, Property 'name' is protected and only accessible within class 'Person' and its subclasses
  //student.age; //NO, Property 'age' is protected and only accessible within class 'Person' and its subclasses.
  //student.regular; //NO, Property 'regular' is private and only accessible within class 'Student'

//proba como cambiar los modificadores de atributos de la clase!
  export {}