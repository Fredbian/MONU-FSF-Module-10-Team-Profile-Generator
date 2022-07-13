// import employee constructor
const employee = require('./employee')

// set class Intern
class Intern extends employee {
    constructor (id, name, email, school) {
        // call employee constructor
        super (id, name, email)
        // add school info
        this.school = school
    }

    // return school input
    getSchool() {
        return this.school
    }

    // return role to employee
    getRole() {
        return 'Intern'
    }
}

// export Intern
module.exports = Intern