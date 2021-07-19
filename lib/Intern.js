// Calls in Employee as dependency.
const Employee = require("./Employee");

// Class Engineer is a extension of class Employee.
class Intern extends Employee {
    constructor({ id, name, email, school }) {
        super({ id, name, email });
        this.school = school;
    }

    // This method will return the Intern's School from the object.
    getSchool() {
        return this.school;
    }

    // This method will return the role of Intern.
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;