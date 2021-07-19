// Employee class and constructor.
class Employee {
    constructor({ id, name, email }) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    // This method will return the Employee Name from the object.
    getName() {
        return this.name;
    }

    // This method will return the Employee ID from the object.
    getId() {
        return this.id;
    }

    // This method will return the Employee Email from the object.
    getEmail() {
        return this.email
    }

    // This method will return the role of Employee.
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;