const Employee = require("./employee");

class Manager extends Employee {
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
}

// methods needed
// getRole(); overridden to return "Manager"

module.exports = Manager;