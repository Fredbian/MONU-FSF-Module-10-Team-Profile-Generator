// import employee constructor
const employee = require('./employee')

// set class Manager
class Manager extends employee {
    constructor (id, name, email, officeNumber) {
        // call employee constructor
        super(id, name, email)
        // add office number info
        this.officeNumber = officeNumber
    }
    
    // return office number input
    getOfficeNumber() {
        return this.officeNumber
    }

    // return role to employee
    getRole() {
        return 'Manager'
    }

}

// export Manager
module.exports = Manager