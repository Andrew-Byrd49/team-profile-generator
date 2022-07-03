//import employee constructor
const Employee = require('./Employee');

// Engineer class extends Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.GitHub = github;
    }

    getGitHub() {
        return this.GitHub;
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;