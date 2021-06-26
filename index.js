const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const teamArray = [];

const generateHTML = require('./src/generateHTML.js')

const managerQuestions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is your team manager\'s name? (Required)',
            validate: managerInput => {
                if (managerInput) {
                    return true;
                } else {
                    console.log('You can not proceed until you have entered your manager\'s name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter your employee ID number. (Required)',
            validate: employeeIDInput => {
                if (employeeIDInput) {
                    return true;
                } else {
                    console.log('You can not proceed until you have entered your employee ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'Please enter your office number.'
        },
    ])
        .then((answers) => {
            const newManager = new Manager(answers.manager, answers.employeeID, answers.email, answers.officeNum)
            teamArray.push(newManager)
            teamMembers()
        })
};
//question for adding team members
const teamMembers = () => {
    console.log(`
=================
Add a New Team Member
=================
`);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please add to your team, or finish building your team by selecting one of the following:',
            choices: ['Engineer', 'Intern', 'No thanks, I am finished building my team']

        },

     ]).then((answer)=>{
        //console.log(answer.role)

         if(answer.role == "Engineer") {
            // call engineerQuestions
            engineerQuestions()
        } else if (answer.role == "Intern") {
            //call internQuestions
            internQuestions();
        } else {
            console.log(teamArray)
            //call generateHTML
            const generateTeam = generateHTML(teamArray);
            //console.log(generateTeam)
            fs.writeFile('./dist/index.html', generateTeam, err => {
                if (err) throw err;

                console.log('HTML Generated!');
            })
        }
    })
};
//questions for engineer
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is your name? (Required)',
            validate: engineerInput => {
                if (engineerInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter your employee ID number. (Required)',
            validate: employeeIDInput => {
                if (employeeIDInput) {
                    return true;
                } else {
                    console.log('You can not proceed until you have entered your employee ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is you Github username? (Required)',
            validate: userNameInput => {
                if (userNameInput) {
                    return true;
                } else {
                    console.log('You can not proceed until you have entered your Github username.');
                    return false;
                }
            }
        },
    ]).then((answer) => {
        const newEngineer = new Engineer(answer.engineerName, answer.employeeID, answer.email, answer.username)
        teamArray.push(newEngineer)

        teamMembers()
    })
}

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is your name? (Required)',
            validate: internInput => {
                if (internInput){
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter your employee ID number. (Required)',
            validate: employeeIDInput => {
                if (employeeIDInput) {
                    return true;
                } else {
                    console.log('You can not proceed until you have entered your employee ID number.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        },
        {
            type: 'input',
            name: 'schoolInput',
            message: 'Please enter your school name.',
            default: true
        },
    ]).then((answer) => {
        const newIntern = new Intern(answer.internName, answer.employeeID, answer.email, answer.schoolInput)
        teamArray.push(newIntern)

        teamMembers()
    })
}
managerQuestions()
    
        
                
                

