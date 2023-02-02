const withGreeter = base => 
  class extends base {
    greet(str) {
        let greeding = ''
        for (const key in this) {
            greeding += `${str}, ${this[key]}!`
        }
        return greeding
    }
}

class Employee {
    constructor(name, salary) {
        this.name = name; 
        this.salary = salary;
    }
    raiseSalary(percent) {
        this.salary *= 1 + percent / 100
    }
}

const GreetableEmployee = withGreeter(Employee)
g = new GreetableEmployee('Harry', 90000)
console.log(g.greet('Hello'))