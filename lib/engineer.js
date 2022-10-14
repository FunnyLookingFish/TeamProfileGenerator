const Employee = require("./employee");

class Engineer extends Employee {
    constructor(githubUsername, name, id, email){
        super(name, id, email);
        this.githubUsername = githubUsername;
    }
}

// methods needed
// getGithub();
// getRole() overridden to return "Engineer"

module.exports = Engineer;