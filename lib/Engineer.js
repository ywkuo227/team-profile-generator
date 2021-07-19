// Calls in Employee as dependency.
const Employee = require("./Employee");

// Class Engineer is a extension of class Employee.
class Engineer extends Employee {
    constructor({ id, name, email, github }) {
        super({ id, name, email });
        this.github = github;
    }

    // This method will return the Engineer's GitHub Username from the object.
    getGitHub() {
        return this.github;
    }

    // This method will return the role of Engineer.
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;