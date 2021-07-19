// Calls in Employee as dependency.
const Employee = require("./Employee");

// Class Manager is a extension of class Employee.
class Manager extends Employee {
    constructor({ id, name, email, officeNumber }) {
        super({ id, name, email });
        this.officeNumber = officeNumber;
    }

    // This method will return the Manager's Office Number from the object.
    getOfficeNumber() {
        return this.officeNumber;
    }

    // This method will return the role of Manager.
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;