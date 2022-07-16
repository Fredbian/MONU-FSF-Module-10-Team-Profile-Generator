// node modules
const inquirer = require('inquirer')
const fs = require('fs')

// import lib
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')

// html
const generateHTML = require('./src/htmlGenerator')

// team array
let team = []

// get data and creatprofile
const createProfile = () => {

    return inquirer.prompt([
        // ask questions to get info
        // get id
        {
            type: 'input',
            name: 'id',
            message: "Please enter team member's ID",
            validate: id => {
                if (isNaN(id)) {
                    console.log("\nPlease enter team member's ID!")
                    return false
                } else {
                    return true
                }
            }
        },

        // get name
        {
            type: 'input',
            name: 'name',
            message: "Please enter team member's name",
            validate: name => {
                if (name) {
                    return true
                } else {
                    console.log("\nPlease enter team member's name!")
                    return false
                }
            }
        },

        // get email
        {
            type: 'input',
            name: 'email',
            message: "Please enter team member's email",
            validate: email => {
                const emailType = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (emailType) {
                    return true
                } else {
                    console.log("\nPlease enter team member's Email!")
                    return false
                }
            }
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
            when: (answers) => answers.role === 'Manager',
            validate: officeNumber => {
                if (isNaN(officeNumber)) {
                    console.log("\nPlease enter Manager's office number!")
                    return false
                } else {
                    return true
                }
            }
        },
        // get github username when role is Engineer
        {
            type: 'input',
            name: 'github',
            message: "Please enter Engineer's github username",
            when: (answers) => answers.role === 'Engineer',
            validate: github => {
                if (github) {
                    return true
                } else {
                    console.log("\nPlease enter Engineer's Github username!")
                    return false
                }
            }
        },
        // get school name when role is Intern
        {
            type: 'input',
            name: 'school',
            message: "Please enter Intern's school name",
            when: (answers) => answers.role === 'Intern',
            validate: school => {
                if (school) {
                    return true
                } else {
                    console.log("\nPlease enter Intern's school!")
                    return false
                }
            }
        },
        // if add member member
        {
            type: 'confirm',
            name: 'addMore',
            message: 'Do you want to add another member?'
        }
    ]).then((answers) => {
        // create info data based on role type
        const id = answers.id
        const name = answers.name
        const email = answers.email
        const role = answers.role
        const officeNumber = answers.officeNumber
        const github = answers.github
        const school = answers.school
        // role is Manager, push info to array
        if (role === 'Manager') {
            team.push(new Manager(id, name, email, officeNumber))
        } 

        // role is Engineer, push info to array
        if (role === 'Engineer') {
            team.push(new Engineer(id, name, email, github))
        }

        // role is Intern, push info to array
        if (role === 'Intern') {
            team.push(new Intern(id, name, email, school))
        }

        console.log(team)
        // add more member or not
        if (answers.addMore) {
            // yes, add more
            return createProfile()
        } else {
            // no, generate HTML
            const data = generateHTML(team)
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