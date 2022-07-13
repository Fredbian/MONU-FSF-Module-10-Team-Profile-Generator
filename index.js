// node modules
const inquirer = require('inquirer')
const fs = require('fs')

// import lib
const engineer = require('./lib/engineer')
const intern = require('./lib/intern')
const manager = require('./lib/manager')

// html
const generateHTML = require('./src/htmlGenerator')

// team array
let teamProfile = []

// get data and creatprofile
const createProfile = () => {

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
            name: 'role',
            message: "Please select team member's role",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        // get office number when role is Manager
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter Manager's office number",
            when: ({ role }) => role === 'Manager'
        },
        // get github username when role is Engineer
        {
            type: 'input',
            name: 'github',
            message: "Please enter Engineer's github username",
            when: ({ role }) => role === 'Engineer'
        },
        // get school name when role is Intern
        {
            type: 'input',
            name: 'school',
            message: "Please enter Intern's school name",
            when: ({ role }) => role === 'Intern'
        },
        // if add member member
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Do you want to add another member?'
        }
    ]).then((answers) => {
        // create info data based on role type
        // role is Manager, push info to array
        if (answers.role === 'Manager') {
            teamProfile.push(new manager(answers.id, answers.name, answers.email, answers.officeNumber))
        }

        // role is Engineer, push info to array
        if (answers.role === 'Engineer') {
            teamProfile.push(new engineer(answers.id, answers.name, answers.email, answers.github))
        }

        // role is Intern, push info to array
        if (answers.role === 'Intern') {
            teamProfile.push(new intern(answers.id, answers.name, answers.email, answers.school))
        }

        console.log(teamProfile)
        // add more member or not
        if (answers.addMore) {
            // yes, add more
            return createProfile()
        } else {
            // no, generate HTML
            const data = generateHTML(teamProfile)
            fs.writeFile('./dist/index.html', data, err => {
                if (err) {
                    console.log(`ERROR! ${err.message}`)
                    return
                } else {
                    console.log(`Team Profile Created!`)
                }
            })
        }
    })
}
createProfile()