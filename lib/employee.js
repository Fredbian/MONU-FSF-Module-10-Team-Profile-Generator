// set class Employee
class Employee {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }

    // return id input
    getId() {
        return this.id
    }

    // return name input
    getName() {
        return this.name
    }

    // return email input
    getEmail() {
        return this.email
    }

    // return role
    getRole() {
        return 'Employee'
    }
}

// export Employee
module.exports = Employee