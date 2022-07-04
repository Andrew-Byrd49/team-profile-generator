//import employee constructor
const Employee = require('./Employee');

// Engineer class extends Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.gitHub = github;
    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;