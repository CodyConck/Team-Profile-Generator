const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./src/generateHTML.js')


const questions = () => {

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
};

const teamMembers = teamMemberData => {
    console.log(`
=================
Add a New Team Member
=================
`);

    if (!teamMemberData.employees) {
        teamMemberData.emplpoyees = [];
    }
return inquirer.prompt([
    {
        type: 'list',
        name: 'role', 
        message: 'Please add to your team, or finish building your team by selecting one of the following:',
        choices: ['Engineer', 'Intern', 'No thanks, I am finished building my team']
    },
//need if statement? to verify choice then prompt questions with temp lits
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
    ])
};



init = () => { 
    questions()
    .then(teamMembers)
    .then((response) => {
        console.log(response)
        
        const answersString = generateHTML(response);
        
        //console.log(answersString)

        fs.writeFile('.index.html', answersString, err => {
            if (err) throw err;

            console.log('HTML Generated!');
        })
    })
}

// Function call to initialize app
init()
