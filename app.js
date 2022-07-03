// link to node modules
const inquirer = require('inquirer');
const fs = require('fs');

// link to profiles
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');

// link to genrate html
const generateHTML = require('./src/generateHTML.js');

// team array
const team = [];

// manager prompts
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your manager's name?",
            validate: (name) => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager's id?",
            validate: (id) => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter an id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager's email?",
            validate: (email) => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your manager's office number?",
            validate: (officeNumber) => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter an office number');
                    return false;
                }
            }
        }
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        addTeamMember();
    }).catch((err) => {
        console.log(err);
    }
    );
};

const addTeamMember = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of this team member?',
            choices: ['Engineer', 'Intern', "I don't want to add any more team members"]
        },
        {
            type: 'input',
            name: 'name',
            message: "What is this team member's name?",
            validate: (name) => {
                if (name) {
                    return true;
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is this team member's id?",
            validate: (id) => {
                if (id) {
                    return true;
                } else {
                    console.log('Please enter an id');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this team member's email?",
            validate: (email) => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is this team member's github username?",
            validate: (github) => {
                if (github) {
                    return true;
                } else {
                    console.log('Please enter a github username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is this team member's school?",
            validate: (school) => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter a school');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'add',
            message: 'Would you like to add another team member?',
            default: false
        }
    ])

        .then(employeeData => {

            let { role, name, id, email, github, school, add } = employeeData;
            let employee;

                if (role === 'Engineer') {
                    employee = new Engineer(name, id, email, github);
                } else if (role === 'Intern') {
                    employee = new Intern(name, id, email, school);
                }

                team.push(employee);

                if (add) {
                    addTeamMember();
                } else {
                    generateHTML();
                }
            }
        )}

    const writeFile = data => {
        fs.writeFile('./dist/index.html', data, err => {
            if (err) {
                console.log(err);
            } else {
                console.log('Successfully generated your HTML');
            }
        })
    };

    addManager()
    .then(addTeamMember)
    .then(teamArray => {
      return generateHTML(teamArray);
    })
    .then(pageHTML => {
      return writeFile(pageHTML);
    })
    .catch(err => {
   console.log(err);
    });