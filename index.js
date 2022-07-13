// node modules
const inquirer = require('inquirer')
const fs = require('fs')

// get input
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')
const manager = require('./lib/manager')
const Manager = require('./lib/manager')

let teamProfile = []

getProfile => {

    return inquirer.prompt([
        // ask questions to get info
        // get id
        {
            type: 'input',
            name: 'id',
            message: "Please enter team member's id"
        },
        // get name
        {
            type: 'input',
            name: 'name',
            message: "Please enter team member's name"
        },
        // get email
        {
            type: 'input',
            name: 'email',
            message: "Please enter team member's email"
        },
        // choose role
        {
            type: 'list',
            name: "role",
            message: "Please select team member's role",
            choices: ["Manager", "Engineer", "Intern"]
        },
        // get office number when role is Manager
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter your office number',
            when: ({role}) => role === 'Manager'
        },
        // get github username when role is Engineer
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your github username',
            when: ({role}) => role === 'Engineer'
        },
        // get school name when role is Intern
        {
            type: 'input',
            name: 'school',
            message: 'Please enter your school name',
            when: ({role}) => role === 'Intern'
        },
        // if add another member
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Do you want to add another member?'
        }
    ]).then((answers) => {
        if(answers.role === 'Manager') {
            teamProfile.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
        }
    })
}