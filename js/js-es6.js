// ES6 = 
// EcmaScript 2015 

// classes in JS 

class Employee {
    id;
    name;
    salary;

    constructor(id, name, salary) { this.id = id; this.name = name; this.salary = salary};

    writeCode () {
        console.log("Employee with the id " + this.id + " is coding.");
    };
}

const employee = new Employee(101, "Sonu", 95000);
employee.writeCode();

