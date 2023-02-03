class Employee {
    // 👇️ Private field must be declared in an enclosing class
    #name
    #salary
    constructor(name, salary) {
        this.#name = name; 
        this.#salary = salary;
    }
    raiseSalary(percent) {
        this.#salary *= 1 + percent / 100
    }
}

he = new Employee('Ken', 24)
he.name //undefined