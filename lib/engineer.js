// import employee constructor
const Employee = require('./employee')

// set class Engineer
class Engineer extends Employee {
    constructor (id, name, email, github) {
        // call employee constructor
        super(id, name, email)
        // add github info
        this.github = github
    }
    
    // return github input
    getGithub() {
        return this.github
    }

    // return role to employee
    getRole() {
        return 'Engineer'
    }
}

// export Engineer
module.exports = Engineer